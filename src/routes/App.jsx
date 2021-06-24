//Dependientes
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
  



//componentes Pages
import Home from "../pages/home";
import Comic from "../pages/Comic";
import Shop from "../pages/shop";
import Header from "../components/header";
import Footer from "../components/footer";




const App = () => {
    return (
     <Router>
        <Header />
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/" component={Comic}/>
             <Route exact path="/" component={Shop}/>
         </Switch>
         <Footer/>
     </Router>

    )
}

export default App;