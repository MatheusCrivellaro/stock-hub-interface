import './CardLoading.css'

const CardLoading = () => {
    return(
        <div className="card-loading col-4" aria-hidden="true">
            <img src="/cinza.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
        </div>
    )
}

export default CardLoading