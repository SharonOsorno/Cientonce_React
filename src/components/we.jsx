import Card from '../components/card_we'

//images
import Estefa from '../images/estefa_photo.jpg'
import Camilo from '../images/camilo-photo.jpg'
import Sharon from '../images/Sharon_photos.jpg'
const We = () => {
    return (
       <section>
           <div className="container">
                <h2 className="text-center py-5 text-bold">Colaboradores</h2>
                <div className="row text-center">
                    <Card 
                    photo={Estefa}
                    title="Estefanía Marín"
                    text="Estudiante SENA"/>

                    <Card 
                    photo={Camilo}
                    title="Juan C. Gutierrez"
                    text="Estudiante SENA"/>


                    <Card 
                    photo={Sharon}
                    title="Sharon Osorno"
                    text="Estudiante SENA" />               
                

                </div>
            </div>
       </section>
    )
}

export default We;