import './Carousel.css'
import {Foto} from "../../interfaces/Foto.ts";

type props = {
    fotos: Foto[]
    placa: string
}

const Carousel = ({ fotos, placa }: props) => {
    return(

        <div id={placa} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {fotos.map((_foto,index) =>
                    <button key={placa + index + 'b'} type="button" data-bs-target={'#' + placa} data-bs-slide-to={index} className={(index===0)?"active":""} aria-current="true" aria-label={'Slide ' + index+1}></button>
                )}
            </div>
            <div className="carousel-inner">
                {fotos.map((foto,index) =>
                    <div key={placa + index + 'f'} className={(index===0)?'carousel-item active' : 'carousel-item'}>
                        <img src={foto.uri} className="d-block w-100" alt="Imagem do Card"/>
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={'#' + placa} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#' + placa} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Carousel