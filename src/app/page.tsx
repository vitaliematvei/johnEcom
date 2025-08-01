// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/client";
import ProductDetails from "../components/layouts/PopularProduct";

// import { client } from "@/sanity/client";

// const PRODUCTS_QUERY = `*[
//   _type == "product"
// ]|order(_createdAt desc)[0...12]{
//   _id,
//   name,
//   "slug": _id,
//   description,
//   price,
//   image
// }`;

// const options = { next: { revalidate: 30 } };

export default function IndexPage() {
  // const products = await client.fetch<SanityDocument[]>(
  //   PRODUCTS_QUERY,
  //   {},
  //   options
  // );

  return (
    <main className="mx-auto min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
      <div className="mx-auto text-center">
        <ProductDetails />
      </div>

      {/* <ul className="flex flex-wrap gap-x-10 text-center items-center">
        {products.map((product) => (
          <li
            className=" -z-10 hover:underline mx-auto my-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            key={product._id}
          >
            <Link href={`/product/${product.slug}`}>
              {product.image && (
                <Image
                  width={180}
                  height={105}
                  style={{ width: "180px", height: "105px" }}
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  className=" rounded-lg"
                />
              )}
              <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
