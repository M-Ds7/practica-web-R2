import Menu from './Menu'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import Detalles from './Detalles'

const Nosotros =() => {
    return(
        <>
            <Menu/>
            <main role="main" className="flix-shirk-0 mt-5">
                <Jumbotron/>
                <Detalles/>
            </main>
            <Footer/>
        </>
    )
}

export default Nosotros