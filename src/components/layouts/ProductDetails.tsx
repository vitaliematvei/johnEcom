import React from "react";
import { client, urlFor } from "@/sanity/client";
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface Product extends SanityDocument {
  name: string;
  description?: string;
  price?: number;
  slug: string;
  oneImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
      // url: string; // url is not directly available on asset in Sanity, use urlFor
    };
    alt?: string;
  };
}

const PRODUCTS_QUERY = groq`*[ _type == "product"]{
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  oneImage
}`;

const options = { next: { revalidate: 30 } };

async function ProductDetails() {
  const products = await client.fetch<Product[]>(PRODUCTS_QUERY, {}, options);

  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="product-card border rounded-lg shadow-md overflow-hidden"
          >
            <div className="product-name p-4 bg-gray-50 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800 flex-grow">
                {product.name}
              </h2>
              {product.oneImage?.asset?._ref && (
                <div>
                  <Image
                    src={urlFor(product.oneImage.asset).url()}
                    alt={product.oneImage.alt || product.name}
                    width={60}
                    height={60}
                    style={{ objectFit: "cover", borderRadius: "4px" }}
                  />
                </div>
              )}
            </div>

            {product.description && (
              <div className="product-description p-4 text-gray-700">
                <p>{product.description}</p>
              </div>
            )}

            {product.price !== undefined && (
              <div className="product-price p-4 border-t bg-gray-50">
                <p className="text-lg font-bold text-gray-900">
                  Price: ${product.price.toFixed(2)}
                </p>
              </div>
            )}

            <div className="p-4 border-t">
              <Link
                href={`/products/${product.slug}`}
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

export default ProductDetails;
