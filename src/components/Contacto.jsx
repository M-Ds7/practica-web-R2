import Menu from './Menu'
import Formulario from './Formulario'
import Mapa from './Mapa'
import Footer from './Footer'

const Contacto = () => {
    return(
        <>
            <Menu/>
            <main className="flex-shirink-0 mt-5" role='main'>
                <div className="container">
                    <h1 className="mb-5">Contaco</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <Formulario/><span></span>
                        </div>
                        <Mapa/><span></span>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Contacto