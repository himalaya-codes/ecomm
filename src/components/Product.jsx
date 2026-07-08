
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';



const Product = (productItem) => {
    const { id, title, images, category, price } = productItem;


    return (
        <>
            <div className='product_item'>
                <NavLink to={`/singleproduct/${id}`}>
                    <h2>{title}</h2>
                    <figure>
                        <img src={images} alt="title" style={{ width: "100%", height: "200px" }} />
                        <figcaption>{category}</figcaption>
                    </figure>
                    <p>{<FormatPrice price={price} />}</p>

                </NavLink>
                <button className='theme_btn'>Add to Cart</button>
            </div>
        </>
    )
}

export default Product
