import '../styles/main.css'

const Card = ({photo, title, text}) => {
    return (
    
    <div class="col-lg-4">
        <img src={photo} className="img-filter img-fluid" alt="photo" />
        <h4 className="text-bold">{title}</h4>
        <p className="parrafo">{text}</p>
    </div>
     
    )
   }        
    export default Card;