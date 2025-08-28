import Stripe from 'stripe';
import { NextResponse } from 'next/server';

console.log('Cheia secreta citita de cod:', process.env.STRIPE_SECRET_KEY);

// Initialize Stripe with your secret key
// Make sure to add `STRIPE_SECRET_KEY` to your environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables.');
}
const stripe = new Stripe(stripeSecretKey);

interface CartItem {
  price_id: string;
  quantity: number;
  //   [key: string]: any;
}

interface CartDetails {
  [key: string]: CartItem;
}

interface CheckoutSessionRequestBody {
  cartDetails: CartDetails;
  customerEmail?: string;
}

export async function POST(req: Request): Promise<Response> {
  const body: CheckoutSessionRequestBody = await req.json();
  const { cartDetails, customerEmail } = body;

  if (!cartDetails) {
    return NextResponse.json(
      { error: 'Missing cart details' },
      { status: 400 }
    );
  }

  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const vercelUrl = process.env.VERCEL_URL;
  const baseUrl = vercelUrl
    ? `${protocol}://${vercelUrl}`
    : `${req.headers.get('origin')}`;

  try {
    const lineItems = Object.values(cartDetails).map((item: CartItem) => {
      // Log the item data to check for any issues
      //   console.log('Processing item:', item);

      // The `price_id` is crucial here and must match the ID in your Stripe Dashboard.
      if (!item.price_id) {
        console.error('Item is missing a price_id:', item);
        throw new Error('All items must have a price_id.');
      }

      return {
        price: item.price_id, // Use the price_id from the cart item
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      customer_email: customerEmail,
      shipping_address_collection: {
        allowed_countries: ['CA'], // Adjust as needed
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'An unknown error occurred.';
    console.error('Stripe session creation error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
