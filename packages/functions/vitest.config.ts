/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
  },
});
  // resolve: {
  //   alias: {
  //     "@/": resolve(__dirname, "./src/"),
  //   },
  // },