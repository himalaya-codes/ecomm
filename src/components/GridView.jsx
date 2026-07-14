import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  //   console.log(products);
  return (
    <Section>
      <div className="grid-view row gy-3">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Section>
  );
};

export default GridView;

const Section = styled.section`
  padding: 40px 0;
  .grid-view {
  }
  @media (max-width: 768px) {
  }
`;
