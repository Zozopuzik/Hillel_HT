import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Product from "../Product";

export default function Category({ category }) {
  const products = useSelector((state) => state.products.data);
  let filteredProducts = [];
  products.forEach((product) => {
    if (product.category === category) {
      filteredProducts.push(product);
    }
  });
  return (
    <Box>
      <h2>{category}</h2>
      <Stack direction="row" spacing={2} sx={{ marginTop: "20px", flexWrap: 'wrap' }}>
        {filteredProducts.map((filteredProduct) => (
          <Product key={filteredProduct.id} filteredProduct={filteredProduct} />
        ))}
      </Stack>
    </Box>
  );
}
