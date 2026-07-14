import React from "react";
import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FilterSection />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <Sort />
              </div>
              <div className="col-md-12">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Products;

const Section = styled.section`
  padding: 40px 0;
`;
