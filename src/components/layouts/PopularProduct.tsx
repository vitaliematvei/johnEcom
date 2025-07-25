import React from "react";
import { client, urlFor } from "@/sanity/client";
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn"; // Assuming AddToCartBtn is in the same directory

interface Product extends SanityDocument {
  name: string;
  description?: string;
  price?: number;
  slug: string; // The slug will be a string (slug.current) from the query
  images?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  }[];
}

const PRODUCTS_QUERY = groq`
  *[ _type == "product"]{
    _id,
    name,
    "slug": slug.current, // Get the string value of the slug
    description,
    price,
    images[]{
      _key,
      _type,
      asset->{
        _id,
        url
      },
      alt
    }
  }
`;

// It's generally good practice to define revalidate options at the fetch level
// or use Next.js's built-in revalidate functionality for async components directly.
// const options = { next: { revalidate: 30 } }; // This is typically for fetch API calls or within `fetch` options.

async function ProductList() {
  const products = await client.fetch<Product[]>(
    PRODUCTS_QUERY,
    {},
    { next: { revalidate: 30 } }
  ); // Applied revalidate option here

  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="product-card border rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            {product.images && product.images.length > 0 && (
              <div className="relative w-full h-48">
                {" "}
                {/* Fixed height for images */}
                <Image
                  alt={product.images[0].alt || product.name || "Product Image"}
                  src={
                    urlFor(product.images[0]).url() || "/placeholder-image.jpg"
                  } // Fallback for src
                  fill // Use fill for better responsive image handling
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
            )}

            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>

              {product.description && (
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {" "}
                  {/* Limit description lines */}
                  {product.description}
                </p>
              )}

              {product.price !== undefined && (
                <p className="text-lg font-bold text-gray-900 mb-4">
                  Price: ${product.price.toFixed(2)}
                </p>
              )}

              <div className="flex items-center justify-between mt-auto">
                {/* <AddToCartBtn product={product} /> */}
                <AddToCartBtn
                  name={product.name}
                  description={product.description}
                  images={product.images}
                  price={product.price}
                  currency="CAD" // Assuming USD, adjust as necessary
                  // slug={product.slug}
                />
                {/* Pass product to AddToCartBtn if it needs product data */}
                <Link
                  href={`/product/${product.slug}`}
                  className="text-blue-600 hover:underline px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Details
                </Link>
              </div>
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

export default ProductList;
