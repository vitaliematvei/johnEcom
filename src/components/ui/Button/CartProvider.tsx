'use client';

import { CartProvider as CProvider } from 'use-shopping-cart';

import { ReactNode } from 'react';

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''}
      successUrl="/success"
      cancelUrl="/error"
      currency="USD"
      //   allowedCountries={["US"]}
      billingAddressCollection={true}
      shouldPersist={true}
      //   cartUpdateBehavior="update"
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
