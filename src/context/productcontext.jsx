// CREATE A context
// provider
// consumer => useContext Hook

import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import ProductReducer from "../reducer/ProductReducer";

//  create a context
const AppContext = createContext();

const API = "https://codemyblock.com/GetProduct.php?Status=Active";

// create provider
const AppProvider = ({ children }) => {
  // reducer start
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };
  // initialize reducer
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // get products api
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const token = "3ca6ca0891f25320f855ac227b1112dd0602189c";
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const products = res.data.products;

      dispatch({ type: "SET_API_DATA", payload: products });
      // console.log(products);
    } catch (error) {
      console.log("API error:", error.response?.data || error.message);
      dispatch({ type: "API_ERROR" });
    }
  };

  // get single product data api
  const getSingleProduct = useCallback(async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const token = "3ca6ca0891f25320f855ac227b1112dd0602189c";
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const singleProduct = await res.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.log("API error:", error.response?.data || error.message);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }, []);

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <>
      <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

//  custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

//  export function
export { AppProvider, useProductContext };
