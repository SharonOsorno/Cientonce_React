import "../styles/main-comic.css";
 //image
 import  banner from"../images/banner_003.jpg";
 const Bannerprincipal = () => {
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
 export default Bannerprincipal;