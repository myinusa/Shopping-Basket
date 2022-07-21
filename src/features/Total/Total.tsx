import React, { useContext } from "react";
import { ProductsContext } from "../../utils/product-context";
import { Total } from "../../utils";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useStyles } from "../../assets/styles";

const TotalDisplay = () => {
  const classes = useStyles();
  const { product } = useContext(ProductsContext);
  
  return (
    <>
      <div className={classes.spaceBetween}>
        <Typography
          variant="h5"
          component="div"
          style={{ color: "black", fontWeight: 500 }}
        >
          Total
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ color: "black", fontWeight: 500 }}
        >
          {`£${Number(Total(product)).toFixed(2)}`}
        </Typography>
      </div>
      <Divider style={{ marginBottom: "1em", marginTop: "2em" }} />
    </>
  );
};

export { TotalDisplay };
