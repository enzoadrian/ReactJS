import { useEffect,useState } from "react";

const Home = () =>{
    const [home, setHome] = useState({});
    useEffect(() => {
        fetch('https://apigenerator.dronahq.com/api/GFu9YIjw/data')
          .then((res) => res.json())
          .then((homeres) => setHome(homeres));
      }, []);
     

      return(
        <div>
        {Object.keys(home).length === 0 ?(
          <div>Cargando...</div>
        ) : (
          <div>
            {home.map((producto) => {
              return (
                <div >
                    <img src={producto.image}/>
                 <h2>{producto.name}</h2>
                 <h3>${producto.price}</h3>
                 
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
export default Home