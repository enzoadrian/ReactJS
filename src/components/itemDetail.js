import { useCartContext } from "../Context/CartContext"
import { useState } from "react";
import { Link } from "react-router-dom";
import Contador from "./Contador";
const Detail =(info) => {
    
        const [goToCart, setGoToCart] = useState(false);
        const { addProduct } = useCartContext();
    
        const onAdd = (quantity) => {
            setGoToCart(true);
            addProduct(info, quantity);
        };
    
        return (
            <div className="container">
                <div className="detail">
                    <img className="detail__image" src={info.image} alt="" />
                    <div className="content">
                        <h1>{info.title}</h1>
                        {goToCart ? (
                            <Link to="/cart"> Terminar al carrito</Link>
                        ) : (
                            <Contador initial={1} stock={5} onAdd={onAdd} />
                        )}
                    </div>
                </div>
            </div>
        );
    };
    
export default Detail