import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { productsTemplate } from "../../data/products";
import Button from "@mui/material/Button";
window.alert = jest.fn();

const ProductsContext = React.createContext(productsTemplate);

const TestBuyNow = () => {
  return (
    <Button
      variant="contained"
      onClick={() => alert("You have bought the products")}
      disabled={productsTemplate.length === 0}
    >
      Buy Now
    </Button>
  );
};

test("renders Buy Now", () => {
  const { getByText } = render(
    <ProductsContext.Provider value={productsTemplate}>
      <TestBuyNow />
    </ProductsContext.Provider>
  );

  expect(getByText(/Buy Now/i).closest("button")).not.toHaveAttribute(
    "disabled"
  );
  fireEvent.click(getByText(/Buy Now/i));
  expect(window.alert).toHaveBeenCalledTimes(1);
});
