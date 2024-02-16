import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMore() {
    const baseUrl = "https://dummyjson.com/products"
    const defaultUrl = "https://dummyjson.com/products?limit=10&skip=10&"

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [skip, setSkip] = useState(0);
    const [url, setUrl] = useState(defaultUrl);
    const [limit, setLimit] = useState(10);

    function generateFetchUrl(limit, skip) {
        const nexSkip = skip + limit;

        setSkip(nexSkip);
        setUrl(`${baseUrl}?limit=${limit}&skip=${skip}`)
    }

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => setProducts(data.products))
            .catch((error) => {
                console.log("Error while fetching data: " + error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [url]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(products);

    return (
        <div className="container">
            <div className="products-container">
                {
                    products && products.length
                        ? products.map((product) => (
                            <div key={product.id} className="product">
                                <img
                                    className="thumbnail"
                                    src={product.thumbnail}
                                    alt={product.title} />
                                    <p>{product.title}</p>
                            </div>
                        ))
                        : null
                }
            </div>
            
                <button onClick={() => generateFetchUrl(limit, skip)} className="load-more-button">
                Load More
            </button>
            
        </div>
    )
}