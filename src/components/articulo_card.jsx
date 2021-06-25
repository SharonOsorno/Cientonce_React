



const Articulo_card = ({photo, title, text,icon}) => {

    return (



        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
                <a href="#"><img className="card-img-top" src={photo} alt="articulo1" /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a className="article-tittle text-bold" href="#">{title}</a>
                    </h4>
                    <h5 className="subtitle">{text}</h5>
                    <p className="card-text parrafo">{text}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{icon}</small>
                </div>
            </div>
        </div>

    )
}

export default Articulo_card;







