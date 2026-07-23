import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import FilterReducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filter: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products ?? [] });
  }, [products]);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  // dropdown sorting value
  const sorting = (event) => {
    dispatch({ type: "GET_SORT_VALUE", payload: event });
  };

  // sort the products whenever the sorting value changes
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value, products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filter]);

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({
      type: "UPDATE_FILTERED_VALUE",
      payload: { name, value },
    });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
