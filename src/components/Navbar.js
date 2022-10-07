import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const Navbar = () =>{
    return(

    <nav className="menu">
<div>
    <h1>
        TiendaMovi
    </h1>
</div>
        <ul className="lista">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Celulares">Celulares</Link>
        </li>
        <li>
        <Link to="/Televisores">Televisores</Link>
        </li>

      </ul>

      <div>
       <Link to ={"/Cart"} ><CartWidget/></Link> 
      </div>
        
    </nav>

    )
}
export default Navbar