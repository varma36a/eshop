import "./Product.css";
import { useStateValue } from "./StateProvider";
import React, { useContext } from "react"


function Product({id, title, image, price, rating}) {


    const dispatch= useStateValue(); // dispatch is alias for action


    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


      
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        )
                        )}
                    </div>    
                </div>
               
                <img src={image} />
                <button onClick={addToBasket}>Add to Basket</button>
               
            </div>
        </div>
    );
}

export default Product;