
const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Nosotros </h1>
                    <p>
                        Somos una comunidad en donde fomentamos el conocimiento colectivo.
                        <br />
                        Solo de esta manera se formarán profesionales que cambien sus vidas y
                        tengan un mejor futuro.
                    </p>
                    <form action="https://nubecolectiva.com" target="_blank">
                        <button type="submit" className="btn btn-primary btn-lg">Visitar Web</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Jumbotron