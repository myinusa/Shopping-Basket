import React, { useState, useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Products } from "./Products";
import { ProductsContext } from "../../utils/product-context";
import { productsTemplate } from "../../data/products";

const ProductsTwo = () => {

  return (
    <Products data={productsTemplate} />
  );

}

test("renders Products Table", () => {

  const { container } = render(
      <ProductsTwo />
  );
  const headingElement = screen.getByText(/Review Your Order/i);
  // screen.getByRole('button', { name: /minusButton/i });
  const buttonEl = container.querySelector(`button[name="Apple-minusButton"]`);
  const inputEl = container.querySelector(`input[name="Apple"]`);
  expect(headingElement).toBeInTheDocument();
  expect(inputEl).toBeInTheDocument();
});
