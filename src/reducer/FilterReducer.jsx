import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // var userSortValue = document.getElementById("sort");
      // var sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS": {
      const newSortData = [...action.payload];

      if (state.sorting_value === "lowest") {
        newSortData.sort((a, b) => a.price - b.price);
      } else if (state.sorting_value === "highest") {
        newSortData.sort((a, b) => b.price - a.price);
      } else if (state.sorting_value === "a-z") {
        newSortData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (state.sorting_value === "z-a") {
        newSortData.sort((a, b) => b.title.localeCompare(a.title));
      }
      return {
        ...state,
        filter_products: newSortData,
      };
    }

    case "UPDATE_FILTERED_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text } = state.filter;
      if (text) {
        const userTypeText = text.toLowerCase();
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          const productName = curElem.title.toLowerCase();

          return productName.includes(userTypeText);
        });
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
      };
    }

    default:
      return state;
  }
};

export default FilterReducer;
