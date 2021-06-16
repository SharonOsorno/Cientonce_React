import Logofooter from '../images/Logo responsive white.png'


const Footer = () => {
  return (
    <section class="footer">
      <div class="container">
        <div className="container">
          <footer className="row p-3 mt-5 justify-content-around align-items-center">
            <div>
              <picture>
                <img
                  class="img-fluid logo"
                  src= {Logofooter}
                  alt="Cientonce"
                />
              </picture>
            </div>

            <div>
              <span className="text-white text-center">
                &copy;2020<b>Cientonce</b>
              </span>
            </div>

            <div>
              <a href="https://es-la.facebook.com">
                <i class="fab fa-facebook-f text-white "></i>
              </a>
              <a href="https://twitter.com/?lang=es">
                {" "}
                <i class="fab fa-twitter text-white mx-3"></i>{" "}
              </a>
              <a href="#">
                <i class="fab fa-youtube text-white"></i>{" "}
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
