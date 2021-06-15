 import "../styles/main-comic.css";
 const Seccion1 = ({ photo }) => {
    return (
        <section>
        <div>
            <picture>
                <img  src={photo} className= "img-fluid" alt="Banner_publicitario"/>
            </picture>
        </div>
    </section>  

    );
  };
 export default Seccion1;
