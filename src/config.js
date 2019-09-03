import dotenv from "dotenv";
import PATH from "path";

const root = PATH.join.bind(this, __dirname, "../");
dotenv.config({path: root(".env")});

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = !isProduction;
export const url = process.env.URL_DB;
export const port = process.env.PORT;
export const secret = process.env.SECRET;
export const salt = process.env.SALT;
export const image = process.env.IMAGE;
export const countItems = process.env.COUNT_ITEMS;
