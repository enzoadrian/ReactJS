import { useCartContext } from "../Context/CartContext"
import { useState } from "react";
const Detail =(info) => {
    
    const {addProduct}=useCartContext()
    
    return(
<div>
    <img src={info.image}></img>
    <h2>{info.name}</h2>
    <h2>{info.price}</h2>
    <button onClick={addProduct}>"Comprar"</button>
</div>
    )
}
export default Detail