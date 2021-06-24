import Form from '../components/form';
const Modal = () => {
    return (

        <div class="modal fade" id="login" data-backdrop="static" data-keyboard="false" >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" ></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                         <Form />
                </div>
                </div>
                </div>
                </div>
    )
}

export default Modal;
