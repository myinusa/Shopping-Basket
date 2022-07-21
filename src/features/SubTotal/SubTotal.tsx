import React, { useContext } from "react";
import { ProductsContext } from "../../utils/product-context";
import Typography from "@mui/material/Typography";
import { useStyles } from "../../assets/styles";
import { calculateSum } from "../../utils";

const SubTotalDisplay = () => {
  const classes = useStyles();
  const { product } = useContext(ProductsContext);

  return (
    <div className={classes.spaceBetween}>
      <Typography variant="h5" style={{ color: "grey", fontWeight: 500, marginBottom: "0.6em" }}>
        Subtotal
      </Typography>
      <Typography
        variant="h5"
        component="div"
        style={{ color: "grey", fontWeight: 500 }}
      >
        {`£${calculateSum(product).toFixed(2)}`}
      </Typography>
    </div>
  );
};

export { SubTotalDisplay };
