import React from "react"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://www.123lifeschool.com/wp-content/uploads/2016/02/checkout-2997.jpg"
                alt="" className="checkout__ad" />
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                    <CheckoutProduct />
                    
                </div>
                
            </div>

            <div className="checkout__right">
                <Subtotal />                
            </div>            
        </div>
    );
}

export default Checkout;