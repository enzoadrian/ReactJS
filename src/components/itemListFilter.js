import { useEffect, useState } from "react"
import{collection, getDocs, getFirestore,query,where} from'firebase/firestore'
import Card from "./Card";
const ItemListFilter =({categoria}) =>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db,'productos');

    const q =query(itemsCollection,where('category','==',categoria))
    getDocs(q).then((snapshot) => {
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
export default ItemListFilter