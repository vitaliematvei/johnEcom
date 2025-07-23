// app/product/[slug]/page.tsx
import React from "react";
import { client, urlFor } from "@/sanity/client";
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/layouts/AddToCartBtn";

interface Product extends SanityDocument {
  name: string;
  description?: string;
  price?: number;
  slug: { current: string };
  images?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  }[];
}

const PRODUCT_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
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

interface ProductPageProps {
  // params is already an object containing your slug, not a Promise here.
  // The error often indicates a misinterpretation or incorrect setup elsewhere.
  params: { slug: string };
}

// Ensure your component is marked 'async' as it performs data fetching
const ProductDetails = async ({ params }: ProductPageProps) => {
  const { slug } = params;

  // Fetch a single product
  const product: Product | null = await client.fetch(PRODUCT_QUERY, { slug });

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg shadow-xl p-6">
        {/* Product Images Section */}
        <div className="md:w-1/2 flex flex-col items-center">
          {product.images && product.images.length > 0 && (
            <>
              {/* Main Image */}
              <div className="mb-4 w-full">
                <Image
                  src={urlFor(product.images[0]).width(800).url() || ""}
                  alt={product.images[0].alt || product.name || "Product image"}
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                  style={{ maxHeight: "600px" }}
                />
              </div>
              {/* Thumbnail Gallery (if more than one image) */}
              {product.images.length > 1 && (
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 relative cursor-pointer border rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={urlFor(image).width(80).height(80).url() || ""}
                        alt={image.alt || `Thumbnail ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 80px"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.name}
          </h1>

          {product.price !== undefined && (
            <p className="text-4xl font-bold text-green-700 mb-6">
              ${product.price.toFixed(2)}
            </p>
          )}

          {product.description && (
            <div className="text-gray-700 leading-relaxed mb-8">
              <p>{product.description}</p>
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-gray-200">
            {/* <AddToCartBtn product={product} /> */}
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
