import Personaje_hombre from "../images/Personaje_002.jpg";
import Personaje_mujer from "../images/personaje_001.jpg";
//componentes
import Cards from "./cards";


const Personajes = () => {
  return (
    <section>
        <div className="py-5 mb-5 about">
          <h3 className="text-center text-white py-3 text-bold">Personajes</h3>
      </div>
   
        <div className="container py-5">
          <div className="row justify-content-center  ">
          <Cards
       photo={Personaje_mujer}
       title="Katherine Johnson"
       text=" Matemática NASA"
     />
      <Cards
       photo={Personaje_hombre}
       title="Eugene Kranz"
       text=" Director Vuelo/Equipo Blanco"
     />
     <Cards
       photo={Personaje_hombre}
       title="Serguéi Koroliov"
       text=" Científico"
     />

          </div>
          <div className="row justify-content-center ">
          <Cards
       photo={Personaje_hombre}
       title="Neil Armstrong"
       text=" Astronauta"
     />
      <Cards
       photo={Personaje_hombre}
       title="Buzz Aldrin"
       text=" Ingeniero/Astronauta"
     />
     <Cards
       photo={Personaje_hombre}
       title="Michael Collins"
       text=" Astronauta"
     />

          </div>
          </div>

    </section>
    
           

                    
           

      
       
       
  );
};

export default Personajes;