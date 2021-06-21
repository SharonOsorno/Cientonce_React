import "../styles/main-comic.css";
const Cards = ({ photo, title, text }) => {
    return (
      <article className="mt-5  border-0 content-zoom shadow-lg p-3 mb-5 text-center">
        <picture>
          <img src={photo} className="img-personaje rounded-circle img-fluid " alt="Img-nav" />
        </picture>
        <div className="card-body text-center">
          <h4 classname="subtitle">{title}</h4>
          <p className="parrafo">{text}</p>
        </div>
        
      </article>
    );
  };
  export default Cards;