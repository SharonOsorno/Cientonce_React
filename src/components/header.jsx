import {Link } from "react-router-dom";
import Logo from '../images/Logo responsive white.png'
import Modal from "./modal";

const Header = () => {
  return (
    <section className="home">
      <header className="container py-2">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <a href="./index.html" className="navbar-brand logo">
            <img
              className="img-fluid logo"
              src={Logo}
              alt="Cientoonce"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ml-auto menu">
              <li className="nav-item">
              <link className="nav-link  mr-5 text-white text-bold "aria-current="page" to ="/">
              Home
              </link>
              </li>
              <li className="nav-item ">
              <link className="nav-link  mr-5 text-white text-bold "aria-current="page" to ="/Comic">
              Comic
              </link>
              </li>
              <li className="nav-item">
              <link className="nav-link  mr-5 text-white text-bold "aria-current="page" to ="/Tienda">
             Tienda
              </link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn_login btn text-white text-bold"
                  data-toggle="modal"
                  data-target="#login"
                >
                  Login
                </button>
                <Modal />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
