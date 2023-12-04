
const Footer =() => {
    return(
        <>
        <footer className="container-fluid">
            <p className="float-right"> <a href="#">Subir</a> </p>
            <p>&copy; {(new Date().getFullYear())} Mi proyecto, inc.&middot </p>
            <a href="#">Politica y privacidad</a>&middot; <a href="#">Terminos</a>
        </footer>
        </>
    )
}

export default Footer