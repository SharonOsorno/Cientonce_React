 import "../styles/main-comic.css";
 //image
 import  banner from"../images/banner_004.jpeg";
 const Seccion1 = () => {
    return (
        <section>
        <div>
            <picture>
                <img  src={banner}  className= "img-fluid" alt="Banner_publicitario"/>
            </picture>
        </div>
    </section>  

    );
  };
 export default Seccion1;
