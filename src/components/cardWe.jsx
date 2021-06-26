const Card = ({ photo, title, text }) => {
    return (
        <div className="col-lg-4">
            <img src={photo} className="img-filter img-fluid" alt="person" />
            <h4 className="text-bold">{title}</h4>
            <p className="parrafo">{text}</p>
        </div>
    )
}

export default Card;