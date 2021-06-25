import Form_contact from '../components/form_contact'

const Contact = () => {
    return (
        <section>
            <button type="button" className=" border-0 iconContact" data-toggle="modal" data-target="#contact">
                <i role="button" className="fas fa-headset text-white"></i>
            </button>
            <div className="modal fade" id="contact" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Form_contact />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;