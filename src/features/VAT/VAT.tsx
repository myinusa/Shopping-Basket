import React, { useContext } from "react";
import { ProductsContext } from "../../utils/product-context";
import { VAT } from "../../utils";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useStyles } from "../../assets/styles";

const VATDisplay = () => {
  const classes = useStyles();
  const { product } = useContext(ProductsContext);
  
  return (
    <>
      <div className={classes.spaceBetween}>
        <Typography
          variant="h5"
          style={{ color: "grey", fontWeight: 500, marginBottom: "0.6em" }}
        >
          VAT @ 20%
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ color: "grey", fontWeight: 500 }}
        >
          {`£${Number(VAT(product)).toFixed(2)}`}
        </Typography>
      </div>
      <Divider style={{ marginBottom: "2em", marginTop: "2em" }} />
    </>
  );
};

export { VATDisplay };
