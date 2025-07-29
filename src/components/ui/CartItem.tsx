// import { urlFor } from "@/sanity/client";

import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { FaPlus, FaMinus, FaX } from 'react-icons/fa6';

type CartItemProps = {
  item: {
    id: string;
    name: string;
    images: string[];
    price: number;
    quantity: number;
  };
};

const CartItem = ({ item }: CartItemProps) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();
  return (
    <div className="flex w-full justify-between pl-4 mb-4 items-center h-[120px] border-b ">
      {/* {item.name} */}
      <div className="w-[110px] h-[110px] relative">
        <Image
          src={item.images[0]}
          fill
          priority
          sizes="(max-width: 110px) 110px, 110px"
          className="object-contain"
          alt="image"
        />
      </div>
      {/* name, price, quantity, remove */}
      <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <h5>{item.name}</h5>
          <button onClick={() => removeItem(item.id)}>
            <FaX className="text-sm" />
          </button>
        </div>
        {/* increment , decrement, item price  */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            ${((item.price / 100) * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
