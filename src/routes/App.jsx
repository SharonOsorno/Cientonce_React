//Dependientes
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
 
//componentes Pages
import Home from "../pages/home"
import Comic from "../pages/comic"
import Shop from "../pages/shop";
import Header from "../components/header";
import Footer from "../components/footer"
 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"



const App = () => {
    return (
     <Router>
        <Header />
         <Switch>
             <Route exact path= "/" component={Home}/>
             <Route exact path= "/comic" component={Comic}/>
             <Route exact path= "/shop" component={Shop}/>
         </Switch>
         <Footer/>
     </Router>

    )
}

export default App;