import Personaje_hombre from "../images/Personaje_002.jpg";
import Personaje_mujer from "../images/personaje_001.jpg";
//componentes
import Cards from "./cards";
import Text_personajes from "./text_personajes";

const Personajes = () => {
  return (
    <section>
        <Text_personajes/>
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