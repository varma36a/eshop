import React from "react";
import "./CheckoutProduct.css";

  function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://www.harrysarmysurplus.net/assets/images/rothco/8159_BIG.jpg"
             alt="" className="checkoutProduct__image" />

             <div className="checkoutProduct__info">
                <p className="checkoutProduct_title">Bag</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct__rating">
                    ⭐ ⭐
                </div>
                <button>Remove from Basket</button>
             </div>
        </div>  
    );
  }

  export default CheckoutProduct;