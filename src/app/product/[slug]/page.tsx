import React from 'react';
import { client } from '@/sanity/client';
import { groq, type SanityDocument } from 'next-sanity';
import AddToCartBtn from '@/components/layouts/AddToCartBtn'; // Assuming this path is correct
import ImageGallery from './ImageGallery';

interface Product extends SanityDocument {
  name: string;
  description?: string;
  price?: number;
  slug: string;
  images?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
      url: string;
    };
    alt?: string;
  }[];
}

const PRODUCT_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0]  {
    _id,
    name,
    "slug": slug.current,
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
  params: Promise<{ slug: string }>;
}

const ProductDetails = async ({ params }: ProductPageProps) => {
  const slug = (await params).slug;

  const product: Product | null = await client.fetch(
    PRODUCT_QUERY,
    { slug },
    { next: { revalidate: 30 } }
  );

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
        {/* Product Images Section - Now handled by ImageGallery */}
        {product.images && product.images.length > 0 ? (
          <ImageGallery
            key={product.name.toString()}
            images={product.images}
            productName={product.name}
          />
        ) : (
          <div className="md:w-1/2 w-full h-96 flex items-center justify-center bg-gray-200 rounded-lg">
            <p className="text-gray-500">No image available</p>
          </div>
        )}

        {/* Product Details Section */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.name}
          </h1>

          {product.price !== undefined && (
            <p className="text-4xl font-bold text-green-700 mb-6">
              ${(product.price / 100).toFixed(2)}
            </p>
          )}

          {product.description && (
            <div className="text-gray-700 leading-relaxed mb-8">
              <p>{product.description}</p>
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-gray-200">
            <AddToCartBtn
              id={product._id}
              currency="USD"
              name={product.name}
              description={product.description ?? ''}
              price={product.price ?? 0}
              images={
                product.images && product.images.length > 0
                  ? product.images.map((img) => ({
                      asset: { url: img.asset.url },
                    }))
                  : []
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
