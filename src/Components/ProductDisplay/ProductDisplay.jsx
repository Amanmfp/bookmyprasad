import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-image">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product-img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_dull_icon} alt="star-img" />
          <p>565</p>
        </div>
        <div className="product-display-right-prices">
          <div className="productdisplay-right-prices-old">
            {product.old_price} Rs
          </div>
          <div className="productdisplay-right-prices-new">
            {product.new_price} Rs
          </div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sit, fuga esse modi est deserunt nihil temporibus nesciunt harum. Fugiat nulla obcaecati autem accusamus nesciunt quis laborum deserunt. Consequatur, dignissimos!
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDisplay
