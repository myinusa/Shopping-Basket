import React, { useContext } from "react";
import { ProductsContext } from "../../utils/product-context";
import Button from "@mui/material/Button";
import { Total } from "../../utils";
// import axios from "axios";

const BuyNow = () => {
  const { product } = useContext(ProductsContext);

  const handleOnChange = () => {
    // const json = JSON.stringify(product);
    //  axios
    //    .post("", json, {
    //      headers: {
    //        // Overwrite Axios's automatically set Content-Type
    //        "Content-Type": "application/json",
    //      },
    //    })
    //    .then((response) => {
    //      return response.data
    //    });
    alert(`Your total is: £${Number(Total(product)).toFixed(2)}`);
  }

  return (
    <div style={{ display: "float", float: "right" }}>
      <Button
        variant="contained"
        onClick={handleOnChange}
        disabled={product.length === 0}
        style={{
          borderRadius: 18,
          backgroundColor: "#00d1c4",
          fontSize: 16,
          width: 125,
          height: 42,
        }}
      >
        Buy Now
      </Button>
    </div>
  );
};

export { BuyNow };
