import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import styled from "styled-components";

const Product = (productItem) => {
  const { id, title, images, category, price } = productItem;

  return (
    <>
      <div className=" col-md-4">
        <Product_Item className="product_item">
          <NavLink to={`/singleproduct/${id}`}>
            <h2>{title}</h2>
            <figure>
              <img
                src={images}
                alt="title"
                style={{ width: "100%", height: "200px" }}
              />
              <figcaption>{category}</figcaption>
            </figure>
            <p>{<FormatPrice price={price} />}</p>
          </NavLink>
        </Product_Item>
      </div>
    </>
  );
};

export default Product;

const Product_Item = styled.div`
  h2 {
    color: black;
    font-size: 18px;
    margin-bottom: 14px;
  }
`;
