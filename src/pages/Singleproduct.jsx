import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import FormatPrice from "../helpers/FormatPrice";
import Skeleton from "react-loading-skeleton";
// import ProductColor from "../components/ProductColor";
import MetaTags from "../components/MetaTags";

const API = "https://codemyblock.com/ProductDetail-2.php";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const Singleproduct = () => {
  const { isSingleLoading, getSingleProduct, singleProduct } =
    useProductContext();
  const { name, category, image, price, description, reviews, stock, stars } =
    singleProduct;

  const [mainImage, setMainImage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id, getSingleProduct]);

  // console.log(singleProduct);

  useEffect(() => {
    if (image && image.length > 0) {
      setMainImage(image[0].url);
    }
  }, [image]);

  if (isSingleLoading) {
    return <Skeleton width={400} height={400} style={{ margin: "30px 0px" }} />;
  }
  return (
    <>
      <MetaTags
        title={`${name} | E-Shopify`}
        description={description}
        image={image?.[0]?.url}
      />
      <h1>Singleproduct ID: {id}</h1>

      <div className="row g-4 my-3">
        <div className="col-md-1">
          <div className="d-flex flex-wrap gap-2 mb-3">
            {image &&
              image.map((curElem, index) => {
                return (
                  <img
                    key={index}
                    src={curElem.url}
                    onClick={() => setMainImage(curElem.url)}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "80px",
                      marginBottom: "10px",
                      border:
                        mainImage === curElem.url
                          ? "2px solid #0d6efd"
                          : "1px solid #ddd",
                      cursor: "pointer",
                    }}
                  />
                );
              })}
          </div>
        </div>
        <div className="col-md-4">
          {mainImage && (
            <img
              src={mainImage}
              alt={name}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                display: "block",
                marginBottom: "15px",
              }}
            />
          )}
        </div>
        <div className="col-md-7">
          <div className="product_detail_box">
            <h2 className="mb-4">{name}</h2>
            <div>
              <p>Category: {category}</p>
              <p>Reviews: {reviews}</p>
              <Stars stars={stars} reviews={reviews} />
            </div>

            <p> {description}</p>
            <p className="text-danger">
              Price: {<FormatPrice price={price} />}
            </p>

            <div className="add_to_cart_btn">
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproduct;
