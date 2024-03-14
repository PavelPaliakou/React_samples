import { useEffect, useState } from "react";
import "./styles.css";


export default function LoadMore() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    const baseUrl = "https://dummyjson.com/products";
    const limit = 20;

    useEffect(() => {
        async function fetchProducts() {
            try {
                let skip = 0;
                if (count === 0) {
                    skip = 0;
                } else {
                    skip = count * limit;
                }

                const response = await fetch(`${baseUrl}?limit=${limit}&skip=${skip}`);
                if (!response.ok) {
                    throw response;
                }

                const data = await response.json();

                setProducts(products.concat(data.products));
            } catch (e) {
                console.log(e);
                setLoading(false);
                setError(e.massage);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [count]);


    useEffect(() => {
        if (products.length === 100) {
            setDisableButton(true);
        }
    }, [products]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
            {
                disableButton
                    ? <p>No more data to load</p>
                    : <button
                        onClick={() => setCount(count + 1)}
                        className="load-more-button"
                        disabled={disableButton}
                    >
                        Load More
                    </button>
            }
        </div>
    )
}