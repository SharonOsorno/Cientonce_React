import Carousel from "../components/carousel"
import About from "../components/about_us"
import We from "../components/we"
import Contact from "../components/contact"

const Home = () => {
return(

    <section className="mb-5">
    <Carousel />
    <About />
    <We />
    <Contact />  
    </section>
)

}

export default Home;