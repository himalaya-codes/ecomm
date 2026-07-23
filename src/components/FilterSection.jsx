import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    filter: { text },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
  };

  // unique category data
  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <Section className="filter_section">
      <div className="form_wrap">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="Search Product"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
    </Section>
  );
};

export default FilterSection;

const Section = styled.section``;
