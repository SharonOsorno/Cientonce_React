//Dependientes
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
  



//componentes Pages
import Home from "../Pages/home.jsx"
import Comic from "../Pages/comic.jsx"
import Shop from "../Pages/shop.jsx";
import Header from "../components/header";
import Footer from "../components/Footer"





const App = () => {
    return (
     <Router>
        <Header />
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/Comic" component={Comic}/>
             <Route exact path="/Shop" component={Shop}/>
         </Switch>
         <Footer/>
     </Router>

    )
}

export default App;