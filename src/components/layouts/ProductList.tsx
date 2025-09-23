import React from 'react';
import { type PortableTextBlock } from '@portabletext/react';
import { client, urlFor } from '@/sanity/client';
import { groq, type SanityDocument } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
// import AddToCartBtn from './AddToCartBtn'; // Assuming AddToCartBtn is in the same directory

interface Product extends SanityDocument {
  name: string;
  description: PortableTextBlock[];
  quantity: number;
  price: number;
  price_id: string;
  slug: string; // The slug will be a string (slug.current) from the query
  images?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
      url: string; // URL of the image asset
    };
    alt?: string;
  }[];
}

const PRODUCTS_QUERY = groq`
  *[ _type == "product"]{
    _id,
    name,
    "slug": slug.current, // Get the string value of the slug
    description[],
    quantity,
    price,
    price_id,
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

async function ProductList() {
  const products = await client.fetch<Product[]>(
    PRODUCTS_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  // const getPlainText = (blocks: PortableTextBlock[]): string => {
  //   if (!blocks || blocks.length === 0) {
  //     return '';
  //   }
  //   return blocks
  //     .map((block) => {
  //       if (block._type !== 'block' || !block.children) {
  //         return '';
  //       }
  //       return block.children.map((span) => span.text).join('');
  //     })
  //     .join('\n');
  // };

  console.log('Fetched products:', products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="product-card border rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            {product.images && product.images.length > 0 && (
              <div className="relative w-full h-48">
                {/* Fixed height for images */}
                <Link href={`/product/${product.slug}`}>
                  <Image
                    alt={
                      product.images[0].alt || product.name || 'Product Image'
                    }
                    src={
                      urlFor(product.images[0]).url() ||
                      '/placeholder-image.jpg'
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                  />
                </Link>
              </div>
            )}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-xs font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>

              {product.quantity > 0 ? (
                <div className="text-gray-700 text-xs mb-2 line-clamp-3">
                  <p className="text-red-500 font-bold text-xs uppercase border border-red-500 inline-block px-2 py-1 rounded-xl">
                    In stock: {product.quantity}
                  </p>
                </div>
              ) : (
                <p className="text-red-800 text-xs font-normal mb-2">
                  Out of the stok!!!
                </p>
              )}

              {product.price !== undefined && (
                <p className="text-sm font-bold text-gray-900 mb-4">
                  Price: ${(product.price / 100).toFixed(2)}
                </p>
              )}

              <div className="flex items-center justify-between mt-auto mx-auto">
                {/* <AddToCartBtn product={product} /> */}
                {/* <AddToCartBtn
                  price_id={product.price_id}
                  id={product._id}
                  name={product.name}
                  description={getPlainText(product.description)}
                  images={
                    product.images
                      ? (product.images
                          .map((img) =>
                            img && img.asset
                              ? { asset: { url: img.asset.url } }
                              : null
                          )
                          .filter(Boolean) as { asset: { url: string } }[])
                      : []
                  }
                  price={product.price ?? 0}
                  currency="CAD"
                /> */}

                <Link
                  href={`/product/${product.slug}`}
                  className="text-xs text-blue-600 hover:underline px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-xs col-span-full text-center text-gray-600 p-8">
          No products found.
        </p>
      )}
    </div>
  );
}

export default ProductList;
