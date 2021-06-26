import Videobanner from '../video/video_banner.mp4'
import banner_002 from '../images/banner_002.jpg'

const Carousel = () => {
    return (
        <section className="slider">
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className="carousel-item  active">
                        <video autoPlay src={Videobanner} className="d-block w-100" ></video>
                    </div>
                    <div className="carousel-item">
                        <img src={banner_002} className="d-block w-100" alt="..." />
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
        </section>
    )
}
export default Carousel;