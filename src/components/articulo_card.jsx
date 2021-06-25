



const Articulo_card = ({photo, title, price, text, icon}) => {

    return (



        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
                <a href="#"><img className="card-img-top" src={photo} alt="articulo1" /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a className="article-tittle text-bold" href="#">{title}</a>
                    </h4>
                    <h5 className="subtitle">{price}</h5>
                    <p className="card-text parrafo">{text}</p>
                </div>
                <div className="card-footer">
                    <button className=""><i class="fas fa-shopping-cart"></i></button>
                    <div class="ec-stars-wrapper">
	<a data-value="1" title="Votar con 1 estrellas"><i class="far fa-star"></i></a>
	<a data-value="2" title="Votar con 2 estrellas"><i class="far fa-star"></i></a>
	<a data-value="3" title="Votar con 3 estrellas"><i class="far fa-star"></i></a>
	<a data-value="4" title="Votar con 4 estrellas"><i class="far fa-star"></i></a>
	<a data-value="5" title="Votar con 5 estrellas"><i class="far fa-star"></i></a>
</div>

                </div>
            </div>
        </div>

    )
}

export default Articulo_card;







