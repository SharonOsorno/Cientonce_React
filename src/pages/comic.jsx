import Aboutspacerose from "../components/Aboutspacerose";
import Bannerprincipal from "../components/Bannerprincipal";
import Personajes from "../components/Personajes";

import "../styles/main-comic.css"

const Comic = () => {
    return(
    
    <section className="mb-5">
       <Bannerprincipal/>
       <Aboutspacerose/>
       <Personajes/> 
    </section>
    )
    
    }

    export default Comic;