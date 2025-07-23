import React from "react";
import { client, urlFor } from "@/sanity/client";
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";

interface Product extends SanityDocument {
  name: string;
  description?: string;
  price?: number;
  slug: string;
  images: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      // url: string; // url is not directly available on asset in Sanity, use urlFor
    };
    alt?: string;
  }[];
}

const PRODUCTS_QUERY = groq`*[ _type == "product"]{
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  images
}`;

const options = { next: { revalidate: 30 } };

async function ProductProduct() {
  const products = await client.fetch<Product[]>(PRODUCTS_QUERY, {}, options);

  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="product-card border rounded-lg shadow-md overflow-hidden"
          >
            {/* The main image */}
            {product.images && product.images.length > 0 && (
              <div className="flex justify-center gap-2 p-4 border-b">
                <Image
                  alt="Product Image"
                  src={urlFor(product.images[0]).url()}
                  width={80}
                  height={80}
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />

                {/* {product.images.map((image, index) => (
                  <Image
                    key={index}
                    alt="Product Image"
                    src={urlFor(image.asset).url()}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover", borderRadius: "4px" }}
                  />
                ))} */}
              </div>
            )}
            {/* <div className="p-4 bg-gray-50 border-b flex items-center justify-between"> */}
            {/* <h2 className="text-xl font-semibold text-gray-800 flex-grow">
                {product.name}
              </h2> */}
            {/* {product.oneImage?.asset?._ref && (
                <div>
                  <Image
                    src={urlFor(product.oneImage.asset).url()}
                    alt={product.oneImage.alt || product.name}
                    width={60}
                    height={60}
                    style={{ objectFit: "cover", borderRadius: "4px" }}
                  />
                </div>
              )} */}
            {/* </div> */}
            {/* 
            {product.description && (
              <div className="product-description p-4 text-gray-700">
                <p>{product.description}</p>
              </div>
            )} */}

            {product.price !== undefined && (
              <div className="product-price p-4 border-t bg-gray-50">
                <p className="text-lg font-bold text-gray-900">
                  Price: ${product.price.toFixed(2)}
                </p>
              </div>
            )}

            <div className="p-4 border-t">
              <AddToCartBtn />
            </div>

            <div className="p-4 border-t">
              <Link
                href={`/product/${product.slug}`}
                className="text-blue-600 hover:underline"
              >
                Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-600 p-8">
          No products found.
        </p>
      )}
    </div>
  );
}

export default ProductProduct;
