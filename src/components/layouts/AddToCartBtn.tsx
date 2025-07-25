"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

type AddToCartBtnProps = {
  id: string;
  currency: string;
  name: string;
  description: string;
  images: { asset: { url: string } }[];
  price: number;
};

const AddToCartBtn = ({
  id,
  currency,
  name,
  description,
  images,
  price,
}: AddToCartBtnProps) => {
  const { addItem } = useShoppingCart();
  const product = {
    id: id,
    name: name,
    description: description,
    images: images?.map((img) => img.asset.url) || [],
    price: price * 100, // Convert to cents if using Stripe
    currency: currency,
  };

  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={() => addItem(product)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
