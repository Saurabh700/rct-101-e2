import React from "react";

const Products = ({ prodData }) => {
  console.log(prodData, "inside products");
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  return (
    <Flex>
      {/*  AddProduct */}
      <Grid>
        {prodData.map((prod) => {
          <div>{prod.title}</div>;
          <div>{prod.category}</div>;
        })}
      </Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
