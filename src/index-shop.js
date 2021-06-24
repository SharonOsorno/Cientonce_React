import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Bannerprincipal from './components/Bannerprincipal';
import Aboutspacerose from './components/Aboutspacerose.jsx';
import Personajes from './components/Personajes.jsx';
import Menu from './components/menu';
import Footer from './components/Footer';
import Carrusel from './components/carrusel';
import Articulos from './components/articulos';
import Modal from './components/modal';





//styles
import './styles/main.css'




// componentes
import Text_about from './components/about_us'
import Menu from './components/menu'
import Footer from './components/Footer'
import We from './components/we'
import Carousel from './components/carousel'
import Contact from './components/contact'

   
ReactDOM.render(
  <React.StrictMode>
  
     <Carousel />
     <Text_about />
     <We />
     <Contact />  
     <Footer />
    <Menu/>
    
    <Bannerprincipal/>
    <Aboutspacerose/>
    <Personajes/>
    <Footer/>
    
    


  

    
    <Carrusel/>
    <Articulos/>
    
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
