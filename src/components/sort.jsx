import React from "react";
import styled from "styled-components";
import { FaListUl } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();
  console.log(filter_products);
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
          <div className="products_data">
            <p>{`${filter_products.length} products available`}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="sort_select">
            <form action="#">
              <select
                name="sort"
                id="sort"
                onChange={(e) => sorting(e.target.value)}
              >
                <option value="lowest">Price: Lowest</option>
                <option value="highest">Price: Highest</option>
                <option value="a-z">Name: A to Z</option>
                <option value="z-a">Name: Z to A</option>
              </select>
            </form>
          </div>
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
