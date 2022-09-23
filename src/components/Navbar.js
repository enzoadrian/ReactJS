import CartWidget from "./CartWidget"

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
        <a href="#Home">Home</a>
        </li>
        <li>
        <a href="#Productos">Productos</a>
        </li>
        <li>
        <a href="#Contacto">Contacto</a>
        </li>
      </ul>

      <div>
        <CartWidget/>
      </div>
        
    </nav>

    )
}
export default Navbar