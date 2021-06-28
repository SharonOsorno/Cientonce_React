const ArticuloCard = ({ photo, title, price, text }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4 pb-5">
            <div className="card">
                <picture><img className="card-img-top" src={photo} alt="articulo1" /></picture>
                <div className="card-body">
                    <h4 className="card-title article-tittle text-bold">{title}
                    </h4>
                    <h5 className="subtitle">{price}</h5>
                    <p className="card-text parrafo">{text}</p>
                </div>
                <div className="card-footer row justify-content-around">
                    <div className="col-5">
                        <span data-value="1" title="Votar con 1 estrellas"><i className="far fa-star"></i></span>
                        <span data-value="2" title="Votar con 2 estrellas"><i className="far fa-star"></i></span>
                        <span data-value="3" title="Votar con 3 estrellas"><i className="far fa-star"></i></span>
                        <span data-value="4" title="Votar con 4 estrellas"><i className="far fa-star"></i></span>
                        <span data-value="5" title="Votar con 5 estrellas"><i className="far fa-star"></i></span>
                    </div>
                    <button className="btn_shop"><i className="fas fa-shopping-cart"></i></button>

                </div>
            </div>
        </div>

    )
}
export default ArticuloCard;







