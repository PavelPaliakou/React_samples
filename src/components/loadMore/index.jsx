import { useEffect, useState } from "react";
import "./styles.css";

//TODO: This shit never works!! Need fix react by itself!!!!!!!!!!!

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

                console.log("skip = " + skip);

                const response = await fetch(`${baseUrl}?limit=${limit}&skip=${skip}`);
                if (!response.ok) {
                    throw response;
                }

                console.log(response);
                const data = await response.json();

                console.log("data = " + data);
                console.log("Length of products: " + products.length);

                setProducts(data.products);

                // if (products.length === 0) {
                //     console.log("The length = 0");
                //     setProducts(data.products);
                //     console.log("Must set the products");
                // } else {
                //     console.log("The length is not 0");
                //     let newProducts = products.concat(data.products);
                //     console.log("newProducts = " + newProducts);
                //     setProducts(newProducts);
                // }

            } catch (e) {
                console.log(e);
                setLoading(false);
                setError(e.massage);
            } finally {
                setLoading(false);
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
    });


    // useEffect(() => {
    //     if (products.length === 100) {
    //         setDisableButton(true);
    //     }
    // }, [products]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log("Products: " + products);
    console.log("Products[0]: " + products[0]);

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