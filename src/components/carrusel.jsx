 import Video from "../video/banner store.mp4"
 import ImageComingsoon from "../images/proximamente.png";
 import ImageTicket from "../images/Air_ticket_mockup(byhyperhiro).png";

 const Carrusel = () => {
    return (
    <div className="col-lg-12">
        <div id="carousel" className="carousel slide mb-4" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active" ></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active"> 
                <video autoPlay rounded loop muted  src={Video} className="d-block w-100"></video>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid rounded" src={ImageComingsoon} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid rounded" src={ImageTicket} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
)
}
export default Carrusel;













            







        


   



    
 
    
        
        

          
          
          
           

 
       






