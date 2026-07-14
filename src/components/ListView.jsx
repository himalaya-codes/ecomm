import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListView = ({ products }) => {
  //   console.log(products);
  return (
    <Section className="list-view">
      <div className="row">
        <div className="col-md-12">
          {products.map((curElem) => {
            const { id, title, images, category, price, description } = curElem;
            return (
              <div className="list_wrap" key={id}>
                <div className="row mb-3 gy-3">
                  <div className="col-md-4">
                    <img src={images} alt={title} />
                  </div>
                  <div className="col-md-8">
                    <p>Product ID:{id}</p>
                    <h3>{title}</h3>
                    <p>
                      {(description ?? "No description available").slice(0, 49)}
                      ...
                    </p>
                    <p>{category}</p>
                    <p>{price}</p>
                    <NavLink to={`/singleproduct/${id}`} className="theme_btn">
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ListView;

const Section = styled.section`
  padding: 40px 0;
  .list_wrap {
    border: 1px solid #b3b2b2;
    margin: 20px 0px;
    padding: 10px 10px;
    border-radius: 10px;
  }
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
  }
`;
