import { ProductInterface } from "../types";

const calculateSum = (products: ProductInterface[]) =>
  products.map((items) => items.cost).reduce((prev, curr) => prev + curr, 0);

const VAT = (product: ProductInterface[]) => {
  const vat = calculateSum(product) * 0.2;
  return vat;
};

const Total = (product: ProductInterface[]) => {
  const total = calculateSum(product) + VAT(product);
  return total;
};

export { calculateSum, Total, VAT };
