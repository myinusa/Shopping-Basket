import React, { useContext, ChangeEvent } from "react";
import { ProductsContext } from "../../utils/product-context";
import { ProductInterface } from "../../types";
import { TableContainer, TableElement } from "../../components/Table";

interface Props {
  data?: ProductInterface[];
}

const Products = ({ data }: Props) => {
  const min = 1;
  const max = 10;
  const { product, setProducts } = useContext(ProductsContext);
  const productColumns = ["Product", "Price", "Quantity", "Cost", ""];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setProducts(
      product.map((x) => {
        if (x.id === +e.target.id)
          return {
            ...x,
            quantity: value,
            cost: x.price * value,
          };
        return x;
      })
    );
  };

  const handleDelete = (id: number) => {
    setProducts(product.filter((el) => el.id !== id));
  };

  const handleAddQuantity = (fruit: ProductInterface) => {
    setProducts(
      product.map((x) => {
        if (x.id === fruit.id)
          if (x.quantity > 0 && x.quantity < 10)
            return {
              ...x,
              quantity: x.quantity + 1,
              cost: x.price * (x.quantity + 1),
            };
        return x;
      })
    );
  };

  const handleSubtractQuantity = (fruit: ProductInterface) => {
    setProducts(
      product.map((x) => {
        if (x.id === fruit.id)
          if (x.quantity > 1 && x.quantity < 11)
            return {
              ...x,
              quantity: x.quantity - 1,
              cost: x.price * (x.quantity - 1),
            };
        return x;
      })
    );
  };

  return (
    <TableContainer>
      <TableElement
        columns={productColumns}
        data={product || data }
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleAddQuantity={handleAddQuantity}
        handleSubtractQuantity={handleSubtractQuantity}
      />
    </TableContainer>
  );
};

export { Products };
