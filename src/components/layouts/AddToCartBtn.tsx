'use client';
import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

type AddToCartBtnProps = {
  id: string;
  currency: string;
  name: string;
  description: string;
  images: { asset: { url: string } }[];
  price: number;
  price_id: string;
};

const AddToCartBtn = ({
  id,
  currency,
  name,
  description,
  images,
  price,
  price_id,
}: AddToCartBtnProps) => {
  const { addItem } = useShoppingCart();
  const product = {
    id: id,
    name: name,
    description: description,
    images: images?.map((img) => img.asset.url) || [],
    price: price,
    currency: currency,
    price_id: price_id,
  };

  // State to manage if the item has been added to the cart
  const [addedToCart, setAddedToCart] = useState(false);
  const handleClick = () => {
    addItem(product);
    setAddedToCart(true); // Set state to true after item is added
  };
  // Determine the background color based on the state
  const buttonColorClass = addedToCart ? 'bg-green-600' : 'bg-blue-600';
  return (
    <button
      className={`${buttonColorClass} text-white px-3 py-2 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-200`}
      onClick={handleClick}
      disabled={addedToCart}
    >
      {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartBtn;
