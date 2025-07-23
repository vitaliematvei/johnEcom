// app/product/[slug]/page.tsx
import React from "react";
import { client, urlFor } from "@/sanity/client"; // Ensure urlFor is correctly exported from your client.ts
import { groq, type SanityDocument } from "next-sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/layouts/AddToCartBtn"; // Assuming this component exists and is correctly implemented
import { PortableText } from "@portabletext/react"; // Import PortableText for rich text descriptions

interface Product extends SanityDocument {
  name: string;
  description?: any[]; // PortableText value is an array of blocks
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

// Define the GROQ query to fetch a single product by its slug
const PRODUCT_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    description,
    price,
    images[]{
      _key, // Important for React list keys if you map over images
      _type,
      asset->{ // Get the asset details for the image
        _id,
        url
      },
      alt
    }
  }
`;

interface ProductPageProps {
  params: { slug: string };
}

// Next.js App Router automatically handles data fetching in server components
const ProductDetails = async ({ params }: ProductPageProps) => {
  const { slug } = params;

  // Fetch a single product, not an array of products
  const product: Product | null = await client.fetch(PRODUCT_QUERY, { slug });

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Product not found.</p>
      </div>
    );
  }

  // Define components for Portable Text rendering (optional, but good practice)
  const components = {
    block: {
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4">{children}</p>
      ),
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-2xl font-semibold my-3">{children}</h2>
      ),
      // Add more custom renderers for other block types (h3, h4, blockquote, etc.)
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc ml-5 mb-2">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal ml-5 mb-2">{children}</ol>
      ),
    },
    marks: {
      // Add custom renderers for marks (bold, italic, link, etc.)
      link: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value: any;
      }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

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
                  src={urlFor(product.images[0]).width(800).url() || ""} // Display the first image as main
                  alt={product.images[0].alt || product.name || "Product image"}
                  width={800}
                  height={600}
                  priority // Load eagerly
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                  style={{ maxHeight: "600px" }} // Constrain height for large images
                />
              </div>
              {/* Thumbnail Gallery (if more than one image) */}
              {product.images.length > 1 && (
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  {product.images.map((image, index) => (
                    <div
                      key={image._key || index}
                      className="w-20 h-20 relative cursor-pointer border rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={urlFor(image).width(80).height(80).url() || ""}
                        alt={image.alt || `Thumbnail ${index + 1}`}
                        fill // Fill the parent div
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
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
              <PortableText
                value={product.description}
                // components={components}
              />
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-gray-200">
            {/* Assuming AddToCartBtn takes product details as props */}
            {/* <AddToCartBtn product={product} /> */}
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
