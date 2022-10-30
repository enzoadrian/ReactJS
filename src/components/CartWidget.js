import React from "react";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return(
        
        <div className="cart">  
           
            <img src="https://st2.depositphotos.com/4326917/11165/v/450/depositphotos_111651974-stock-illustration-shopping-cart-with-check-mark.jpg" alt="" className="imgCart"></img>
            <span>{totalProducts() || ""}</span>
           
        </div>
    )
}

export default CartWidget