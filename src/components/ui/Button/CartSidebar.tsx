'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useShoppingCart } from 'use-shopping-cart';
import CartItem from '../CartItem';
import CheckoutBtn from './CheckoutBtn';

const CartSidebar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Shipping Cart({cartCount ?? 0})
          </SheetTitle>
        </SheetHeader>
        <>
          {(cartCount ?? 0) === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return (
                    <CartItem
                      key={key}
                      item={{
                        ...item,
                        images: item.images ?? [],
                      }}
                    />
                  );
                })}
              {(cartCount ?? 0) > 0 && (
                <div>
                  <div className="flex justify-between items-center font-semibold">
                    <div className="uppercase mb-5 px-5">Total</div>
                    <div className="px-5">
                      ${((totalPrice ?? 0) / 100).toFixed(2)}
                    </div>
                  </div>
                  <CheckoutBtn />
                </div>
              )}
            </ScrollArea>
          )}
        </>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
