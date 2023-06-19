import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { alias } from "./alias";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      ...alias,
    },
  },
});
