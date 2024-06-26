import './SearchMarca.css'

const SearchMarca = () => {
    return (

        <form className="d-flex" role="search">
            <input className="form-control me-2" placeholder="Search" aria-label="Search"/>
            <button className="buscar-button" type="submit">Buscar</button>
        </form>

    )
}

export default SearchMarca