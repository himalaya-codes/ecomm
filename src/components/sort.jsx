import React, { memo } from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa";

const Sort = () => {
  return (
    <Section>
      <div className="row">
        <div className="col-md-4">
          <div className="sort_btns">
            <button className="sort_btn">Grid </button>
            <button className="sort_btn">List Viewjhjhgfjfhf</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="products_data">products available</div>
        </div>
        <div className="col-md-4">
          <div className="sort_select">Sort Selection</div>
        </div>
      </div>
    </Section>
  );
};

export default memo(Sort);

const Section = styled.section`
  padding: 30px 0px;
`;
