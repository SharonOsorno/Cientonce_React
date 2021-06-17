//image

import Personaje_hombre from "../images/Personaje_002.jpg";
import Personaje_mujer from "../images/personaje_001.jpg";
//componentes
import Cards from "./cards";
import Text_personajes from "./text_personajes";

const Personajes = () =>{
    return(
        <section className="container mt-5 py-5">
            <Text_personajes/>
       <div className=" mt-5  border-0 content-zoom shadow-lg p-3 mb-5 text-center" style="width: 18rem;">
       <article class="card-body text-center">
       <Cards
       photo={Personaje_mujer}
       title="Katherine Johnson"
       text=" Matemática NASA"
     />
     <article/>
     <article class="card-body text-center">
     
     <Cards
       photo={Personaje_hombre}
       title="Eugene Kranz"
       text=" Director Vuelo/Equipo Blanco"
     />
     </article>
     <article class="card-body text-center">
     <Cards
       photo={Personaje_hombre}
       title="Serguéi Koroliov"
       text=" Científico"
     />
     </article>
     <article class="card-body text-center">
     <Cards
       photo={Personaje_hombre}
       title="Neil Armstrong"
       text=" Astronauta"
     />
     </article>
     <article class="card-body text-center">
      <Cards
       photo={Personaje_hombre}
       title="Buzz Aldrin"
       text=" Ingeniero/Astronauta"
     />
     </article>
     <article class="card-body text-center">
     <Cards
       photo={Personaje_hombre}
       title="Michael Collins"
       text=" Astronauta"
     />
     </article>
     </div>
        <section/>
    )
}
 
export default Personajes;
       




  