import "./styles.css";
import { useEffect, useState } from "react";

//TODO: why doesn't work without images check?

export default function ImageSlider({ url, limit = 10, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (url !== "") {
            fetchImages(url);
        }

        async function fetchImages(fetchUrl) {
            fetch(`${fetchUrl}?page=${page}&limit=${limit}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => { setImages(data) })
                .catch((error) => {
                    console.log("Error while fetching data: " + error);
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                })

            // try {
            //     const response = await fetch(`${fetchUrl}?page=${page}&limit=${limit}`);
            //     const data = await response.json();

            //     if (data) {
            //         setImages(data);
            //         setCurrentImageIndex(0);
            //         setLoading(false);
            //     }

            // } catch (error) {
            //     setError(error.message);
            //     setLoading(false);
            // }
        }
    }, [url, limit, page]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    function arrowHandler(offset) {

        if (currentImageIndex + offset < 0) {
            setCurrentImageIndex(images.length - 1);
            return;
        }

        if (currentImageIndex + offset >= images.length) {
            setCurrentImageIndex(0);
            return;
        }

        setCurrentImageIndex(currentImageIndex + offset);
    }

    return (
        <div className="container">
            <div className="slider-container">
                <button className="arrow left-arrow" onClick={() => arrowHandler(-1)}>
                    &larr;
                </button>

                <img
                    className="main-image"
                    src={images[currentImageIndex].download_url}
                    alt={`Made by ${images[currentImageIndex].author}`} />

                <button className="arrow right-arrow" onClick={() => arrowHandler(1)}>
                    &rarr;
                </button>
                <span className="indicators-container">
                    {
                        images && images.length
                            ? images.map((_, index) =>
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={currentImageIndex === index
                                        ? "indicator active-indicator"
                                        : "indicator inactive-indicator"}
                                ></button>
                            )
                            : null
                    }
                </span>

            </div>
        </div>
    )
}