import { useEffect, useState } from "react";
import "./styles.css";

//FIXME: doesn't work

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
                const response = await fetch(
                    `${baseUrl}?limit=${limit}&skip=${count === 0
                        ? 0
                        : count * limit}`
                );

                if (!response.ok) {
                    throw response;
                }

                const data = await response.json();

                setProducts((prevData) => [...prevData, ...data.products]);

                console.log(products);
                
            } catch (e) {
                console.log(e);
                setLoading(false);
                setError(e.massage);
            }
        }

        fetchProducts();

        // fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw response;
        //     })
        //     .then(setProducts((data) => data.products))
        //     .catch((error) => {
        //         console.log("Error while fetching data: " + error);
        //         setError(error.message);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     })
    }, [count]);


    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true);
        }
    }, [products]);

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

            <button
                onClick={() => setCount(count + 1)}
                className="load-more-button"
                disabled={disableButton}>
                Load More
            </button>
            {
                disableButton
                    ? <p>No more data to load</p>
                    : null
            }
        </div>
    )
}