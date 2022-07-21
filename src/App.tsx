import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ProductsContext } from "./utils/product-context";
import { productsTemplate } from "./data/products";
import {theme} from "./assets"
import {
  MainHeading,
} from "./components";
import { TotalDisplay, SubTotalDisplay, VATDisplay, BuyNow } from "./features";
import {Products} from "./features/Products"
import { ThemeProvider } from "@mui/material/styles";
import { useStyles } from "./assets/styles";

function App() {
  const classes = useStyles();
  const [product, setProducts] = useState(productsTemplate);
  return (
    <ProductsContext.Provider value={{ product, setProducts }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Box className={classes.mainBox}>
            <MainHeading />
            <Products />
            <SubTotalDisplay />
            <VATDisplay />
            <TotalDisplay />
            <BuyNow />
          </Box>
        </Container>
      </ThemeProvider>
    </ProductsContext.Provider>
  );
}

export default App;
