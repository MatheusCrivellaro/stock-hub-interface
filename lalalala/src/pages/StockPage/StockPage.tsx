import './StockPage.css'
import {useGetStock} from "../../hooks/useGetStock.tsx";
import CardLoading from "../../components/CardLoading/CardLoading.tsx";
import Card from "../../components/Card/Card.tsx";
import SearchMarca from "../../components/SearchMarca/SearchMarca.tsx";

const StockPage = () => {

    const { data, isLoading } = useGetStock();

    return (

        <div className="stock-page row">
            <div className="collapse col-4" id="collapseWidthExample">
                <div className="search-camp">
                    <SearchMarca />
                </div>
            </div>
            <div className="stock-camp row col-8">
                <h1>Stock</h1>
                <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseWidthExample" aria-expanded="false"
                            aria-controls="collapseWidthExample">
                        Busca
                    </button>
                </p>
                {data?.map(vehicle =>
                    <Card vehicle={vehicle} key={vehicle.codigo}/>
                )}
                {isLoading &&
                    <>
                        <CardLoading/>
                        <CardLoading/>
                        <CardLoading/>
                        <CardLoading/>
                        <CardLoading/>
                        <CardLoading/>
                        <CardLoading/>
                        <CardLoading/>
                    </>
                }
            </div>
        </div>

    )
}

export default StockPage