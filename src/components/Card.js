 import { Link } from "react-router-dom"
 const Card =  (info) =>{
   console.log(info) 
    return(
        <div >
                    <img src={info.image}/>
                 <h2>{info.name}</h2>
                 <h3>${info.price}</h3>
                 <Link to= {`/Detail/${info.id}`}> Ver Detalle </Link>
                </div>
    )
 }

 export default Card