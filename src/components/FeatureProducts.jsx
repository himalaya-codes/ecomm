import { useProductContext } from "../context/productcontext";
import Skeleton from "react-loading-skeleton";



import Product from "./Product";

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts);

    if (isLoading) {
        return (
            <Skeleton width={200} height={300} />
        )
    }
    return (
        <>
            <div className="feature_section my-5">
                <div className="container">
                    <h2>Feature Products</h2>
                    <div className="feature_product_box">
                        {
                            featureProducts.map((productItem) => {
                                return (

                                    <Product key={productItem.id} {...productItem} />

                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </>
    )
}

export default FeatureProducts
