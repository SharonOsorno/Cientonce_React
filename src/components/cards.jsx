import "../styles/main-comic.css";
const Cards = ({ photo, title, text }) => {
    return (
      <article className="card-body text-center card text-center py-3 shadow border-0 rounded ">
        <picture>
          <img src={photo} className="img_nav img-fluid pb-5" alt="Img-nav" />
        </picture>
        <div className="text mb-4">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        
      </article>
    );
  };
  export default Cards;