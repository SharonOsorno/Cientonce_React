const Form = () => {
    return (
        <form >
            <h2 className="text-center pb-3 text-bold text-black">Inicio Sesión</h2>
            <div className="form-group">
                <label for="email">Correo electrónico</label>
                <input required type="email" class="form-control" />
                <small id="emailHelp" className="form-text text-muted">No compartas tu correo electrónico con nadie</small>
            </div>
            <div className="form-group">
                <label for="password">Contraseña</label>
                <input required type="password" className="form-control" />
            </div>
            <div className="form-group form-check">
                <input required type="checkbox" className="form-check-input" />
                <label >Mantenerme conectado</label>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            <div className="my-3">
                <span> ¿Ya tienes cuenta? <a href="#">Registrate</a></span><br />
                <span><a href="#">Recuperar contraseña</a></span>
            </div>
        </form>
    )
}
export default Form;
