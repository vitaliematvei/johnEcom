// File: ImageGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageProps {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
    url: string;
  };
  alt?: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
  productName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-200 rounded-lg">
        <p className="text-gray-500">No image available</p>
      </div>
    );
  }

  return (
    <div className="md:w-1/2 flex flex-col items-center">
      {/* Main Image */}
      <div
        className="mb-4 w-full relative"
        style={{ paddingTop: '75%' }} // Maintain aspect ratio
      >
        <Image
          src={mainImage.asset.url}
          alt={mainImage.alt || productName || 'Product image'}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'contain' }}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnail Gallery (if more than one image) */}
      {images.length > 1 && (
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {images.map((image) => (
            <div
              key={image.asset._ref} // This is the correct and only required key
              className={`w-20 h-20 relative cursor-pointer border rounded-md overflow-hidden transition-opacity ${
                mainImage.asset._ref === image.asset._ref
                  ? 'border-blue-500 ring-2 ring-blue-500'
                  : 'hover:opacity-80'
              }`}
              onClick={() => setMainImage(image)}
              onMouseEnter={() => setMainImage(image)} // Optional: change on hover
            >
              <Image
                src={image.asset.url}
                alt={image.alt || `Thumbnail for ${productName}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="80px"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
