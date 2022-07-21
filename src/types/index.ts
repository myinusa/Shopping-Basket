import { ChangeEvent } from "react";

export interface ProductInterface {
  id: number;
  product: string;
  price: number;
  quantity: number;
  cost: number;
}

export interface TableColumn {
  product: string;
  price: number;
  quantity: number;
  cost: number;
}

type functions = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: (id: number) => void;
  handleAddQuantity: (fruit: ProductInterface) => void;
  handleSubtractQuantity: (fruit: ProductInterface) => void;
};

export interface TableProps extends functions {
  data: ProductInterface[];
  columns: string[];
}
