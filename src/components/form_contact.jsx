const Form_contact = () => {
    return (
        <form id="contactForm" className="row justify-content-center align-items-center" >
            <div className="col-12 btn-contact py-4 mb-3">
                     <div className=" justify-content-center text-center text-white" >
                       <h4 className="text-bold">¿Podemos ayudarte en algo?</h4>
                       <p className="subtitle">Con gusto te asesoramos</p>
                     </div>  
            </div>
            <div className="col-12"> 
                    <div className="form-group ">
                        <label for="Name" className="parrafo">Nombre y apellidos</label>
                        <input required type="text" className="form-control parrafo" placeholder="Nombre y apellidos" />
                    </div>
                    <div className="form-group ">
                       <label for="Email" className="parrafo">Email</label>
                       <input required type="email" className="form-control parrafo"  placeholder="Email" />
                    </div>
                    <div className="form-group ">
                       <label for="Coment" className="parrafo">Comentario</label>
                       <textarea type="text" className="form-control parrafo" cols="0" rows="0" placeholder="Escribe tu comentario..."></textarea>
                    </div>
                    <div className="form-group text-center">
                       <div className="form-check">
                         <input required className="form-check-input" type="checkbox" id="gridCheck" />
                         <label className="form-check-label parrafo" for="gridCheck" >
                           Acepto la <a href="#" className="privacidad text-decoration-none text-bold ">politica de privacidad</a>
                         </label>
                       </div>
                       <button type="submit" className="btn btn-contact text-white parrafo mt-3">Enviar</button> 
                    </div> 
            </div>
        </form>
    )
}

export default Form_contact;
