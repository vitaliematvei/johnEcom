import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jw5gv2jq",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
