import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./Dashboard/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Main className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<Singleproduct />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </Main>
      </Router>
    </>
  );
}

const Main = styled.main``;

export default App;
