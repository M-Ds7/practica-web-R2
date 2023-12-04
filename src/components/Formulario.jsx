

const Formulario = () => {
    return(
        <>
            <form action="" className="mb-5">
                <div className="form-group">
                    <label htmlFor="nya" className="negrita">Nombre completo</label>
                    <input type="text" className="form-control" id="nya" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="negrita">Email</label>
                    <input type="text" className="form-control" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Asunto" className="negrita">Asunto</label>
                    <input type="text" className="form-control" id="Asunto" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Mensaje" className="negrita">Mensaje</label>
                    <input type="text" className="form-control" id="Mensaje" required/>
                </div>
                <button type="submit" className="btn btn-secondary">Enviar</button>
            </form>
        </>
    )
}

export default Formulario