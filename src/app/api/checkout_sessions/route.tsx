import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe with your secret key
// Make sure to add `STRIPE_SECRET_KEY` to your environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// We've removed the `any` type here and defined the expected properties
interface CartItem {
  price_id: string;
  quantity: number;
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

  try {
    const lineItems = Object.values(cartDetails).map((item: CartItem) => {
      // The `price_id` is crucial and must match the ID in your Stripe Dashboard.
      if (!item.price_id) {
        // Log the error for debugging purposes
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
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
      customer_email: customerEmail,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    // This is the new, safer way to handle errors without using `any`.
    // We check if the error is an instance of the native Error object.
    const errorMessage =
      err instanceof Error ? err.message : 'An unknown error occurred.';
    console.error('Stripe session creation error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
