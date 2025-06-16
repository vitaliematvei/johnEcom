import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[
  _type == "product"
]|order(_createdAt desc)[0...12]{
  _id,
  name,
  "slug": _id, 
  description,
  price,
  image
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const products = await client.fetch<SanityDocument[]>(
    PRODUCTS_QUERY,
    {},
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ul className="flex flex-col gap-y-4">
        {products.map((product) => (
          <li className="hover:underline" key={product._id}>
            <Link href={`/product/${product.slug}`}>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {product.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.image}
                  alt={product.name}
                  className="mt-2 max-h-32 object-contain"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
