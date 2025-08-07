// CheckoutBtn.tsx
'use client';

import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe.js outside of a component’s render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutBtn = () => {
  const { cartDetails, totalPrice, clearCart } = useShoppingCart();

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error('Stripe.js failed to load.');
        return;
      }

      // Make a POST request to your new API route
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartDetails: cartDetails,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to Stripe Checkout using the session ID
        stripe.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        console.error('Error from server:', data.error);
        // Handle error, maybe show an alert to the user
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleCheckout}
        className="btn btn-primary w-3/4 h-10 bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded-2xl text-white transition-all duration-200"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CheckoutBtn;
