import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "jw5gv2jq",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => imageBuilder.image(source);
