import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "podteam",
  apiKey: process.env.API_KEY,
});
