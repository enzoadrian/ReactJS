import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<>
				<p>No hay Productos en el carrito</p>
				<Link to="/"><spam>Home</spam> </Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
		</>
	);
};

export default Cart;