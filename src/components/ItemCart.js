import { useCartContext } from '../Context/CartContext';


const ItemCart = ( product ) => {
    const { removeCart } = useCartContext();
    return (
        <div >
            <img src={product.image} alt={product.name} />
            <div>
                <p>Descripcion: {product.name}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio : {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={()=>  removeCart(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart