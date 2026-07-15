import React from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { grid_view, setGridView, setListView } = useFilterContext();
  return (
    <Div>
      <div className="row">
        <div className="col-md-4">
          <div className="sort_btns">
            <button
              className={`sort_btn ${grid_view ? "active" : ""}`}
              onClick={setGridView}
            >
              <IoGridOutline />
            </button>
            <button
              className={`sort_btn ${!grid_view ? "active" : ""}`}
              onClick={setListView}
            >
              <FaListUl />
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="products_data">products available</div>
        </div>
        <div className="col-md-4">
          <div className="sort_select">Sort Selection</div>
        </div>
      </div>
    </Div>
  );
};

export default Sort;

const Div = styled.div`
  padding: 30px 30px;
  border: 1px solid #b3b2b2;

  .active {
    background-color: #000;
    color: #fff;
  }
  .sort_btns {
    display: flex;
    gap: 10px;
  }

  button {
    border: none;
    padding: 4px 11px;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
