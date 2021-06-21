import "../styles/main-comic.css";
const Cards = ({ photo, title, text }) => {
    return (
      <article className="card-body text-center content-zoom  shadow-lg  mb-7">
        <picture>
          <img src={photo} className="img-personaje rounded-circle img-fluid  " alt="Img-nav" />
        </picture>
        <div className="text mb-4">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        
      </article>
    );
  };
  export default Cards;
  