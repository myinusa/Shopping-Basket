import { createContext } from "react";
import {ProductInterface} from "../types"
interface IProductContextData {
  product: ProductInterface[];
  setProducts: (products: ProductInterface[]) => void;
}
export const ProductsContext = createContext({} as IProductContextData);