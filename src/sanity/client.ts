import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "jw5gv2jq",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const imageBuilder = (client: ReturnType<typeof createClient>) =>
  imageUrlBuilder(client);

export function urlFor(source: any) {
  return imageBuilder(client).image(source);
}
