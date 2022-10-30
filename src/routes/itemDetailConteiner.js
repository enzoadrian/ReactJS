import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { collection,getFirestore,getDocs } from "firebase/firestore";
import Detail from "../components/itemDetail";
const DetailId = () => {
   
   const{id} = useParams();
   const [product, setProduct] = useState()

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'productos')
    getDocs(itemsCollection).then((res) => {
      const arrproducts = res.docs.map((doc) => (doc.data()))
      setProduct(arrproducts.filter(elem => elem.id.toString() === id)[0])
    })
  }, [id])
    return(
    <div>
      <Detail {...product}>

      </Detail>
    </div>

    )
}

export default DetailId