import Form from '../components/form';

const Modal = () => {
  return (
    <div className="modal fade" id="login" data-backdrop="static" data-keyboard="false" >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i className="fas fa-times"></i></span>
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
