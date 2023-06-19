import { resolve } from "path";

const r = (p: string) => resolve(__dirname + "/src", p);

export const alias: Record<string, string> = {
  "~~": r("."),
  "~~/": r("./"),
  "@": r("."),
  "@@": r("."),
  "@@/": r("./"),
  "@/": r("./"),
  "@data": r("./__data__"),
  "@components": r("./components"),
  assets: r("./assets"),
  public: r("./public"),
  "public/": r("./public/"),
};
