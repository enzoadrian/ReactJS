import { useEffect, useState } from "react"
import{collection, getDocs, getFirestore} from'firebase/firestore'
import Card from "./Card";
const ItemList =() =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db,'productos');
    getDocs(itemsCollection).then((snapshot) => {
        const productos = snapshot.docs.map((doc) =>doc.data());
        setProducts(productos);
    } );
    },[]);
return(
    <div>
{products.map((producto)=>(
    <Card {...producto}></Card>
)
)}
    </div>

)
}
export default ItemList