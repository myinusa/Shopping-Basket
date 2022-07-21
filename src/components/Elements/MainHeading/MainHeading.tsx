import React from "react";
import Typography from "@mui/material/Typography";
// import { useStyles } from "../../styles";
import Divider from "@mui/material/Divider";


const MainHeading = () => {
//   const classes = useStyles();
//   const { product } = useContext(ProductsContext);

  return (
    <>
      <Typography
        variant="h3"
        component="div"
        // gutterBottom
        style={{ textAlign: "center" }}
      >
        Review Your Order & Complete Checkout
      </Typography>
      <Divider style={{ marginBottom: "1em", marginTop: "1em" }} />
    </>
  );
};

export { MainHeading };
