import "./styles.css";
import { useEffect, useState } from "react";

//TODO: why doesn't work without images check?

export default function ImageSlider({ url, limit = 10, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);

    async function fetchImages(fetchUrl) {
        try {
            const response = await fetch(`${fetchUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setCurrentImageIndex(0);
            }

        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        if (url !== "") {
            fetchImages(url);
        }
    }, [url]);

    if (errorMessage !== null) {
        return <div>{errorMessage}</div>
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

    console.log(currentImageIndex);
    console.log(images);

    return (
        <div className="container">
            <div className="slider-container">
                <button className="arrow left-arrow" onClick={() => arrowHandler(-1)}>
                    &larr;
                </button>

                {images && images.length
                    ? <img
                        className="main-image"
                        src={images[currentImageIndex].download_url}
                        alt={`Made by ${images[currentImageIndex].author}`} />
                    : null
                }

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