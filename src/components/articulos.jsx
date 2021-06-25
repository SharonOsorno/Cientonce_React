
//import GradientTshirt from '../images/Img/mock up1.png';
import Chompa from '../images/chompa.png';
import BlackTshirt from '../images/nuevo formato tshirt.png';
import WhiteTshirt from '../images/nuevo formato tshirt white.png';
import Totebag from '../images/totebag.png';
import Gorra from '../images/gorra 111.png';
import Articulo_card from './articulo_card';
import Tshirt from '../images/mock up1.png';



const Articulos = () => {

    return (

       <div className="container">

           <div className="row">


               <Articulo_card photo={Tshirt} title="Gradient T-shirt" price="COP$ 60.000" text="Hermosa camiseta de color degradado azul-morado." icon="iconos"/>
               <Articulo_card photo={Chompa} title="Gradient Hoddie" price="COP$ 120.000" text="Increible hoddie con degradado de color morado-negro." icon="iconos"/>
               <Articulo_card photo={BlackTshirt} title="T-shirt Nuevo Formato" price="COP$ 40.000" text="Espectacular Camiseta negra nuevo formato." icon="iconos"/>
               <Articulo_card photo={WhiteTshirt} title="T-shirt Nuevo Formato" price="COP$ 40.000" text="Espectacular Camiseta blanca nuevo formato." icon="iconos"/>
               <Articulo_card photo={Totebag} title="Tote Bag Logo Cientonce" price="COP$ 20.000" text="Hermoso bolso ecológico para salir de compras y cuidar el medio ambiente." icon="iconos"/>
               <Articulo_card photo={Gorra} title="Gorra Logo Cientonce" price="COP$ 25.000" text="Linda gorra negra con costuras moradas tipo baseball." icon="iconos"/>







           </div>






       </div>
        
);

};

export default Articulos;






            


        








        












