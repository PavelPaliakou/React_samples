import "./styles.css";
import { useEffect, useState } from "react";

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    let url = "https://picsum.photos/v2/list?page=1&limit=10";

    async function fetchImages(getUrl) {
        const response = await fetch(`${getUrl}`);
        const data = await response.json();

        console.log(data);

        if (data) {
            setImages(data.map((item) => item.download_url));
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);


    function arrowHandler(offset) {

        if (currentIndex + offset < 0) {
            setCurrentIndex(images.length - 1);
            return;
        }

        if (currentIndex + offset >= images.length) {
            setCurrentIndex(0);
            return;
        }

        setCurrentIndex(currentIndex + offset);
    }

    return (
        <div className="container">
            <div className="slider-container">
                <div className="main-image">
                    <button className="left-arrow" onClick={() => arrowHandler(-1)}>
                        &larr;
                    </button>

                    <img width={500} height={500} src={images[currentIndex]} alt="something" />

                    <button className="right-arrow" onClick={() => arrowHandler(1)}>
                        &rarr;
                    </button>
                </div>

                <div className="row-of-images">
                    {
                        images.map((image, index) => {
                            return (
                                <img key={index}
                                    width={100} height={100}
                                    style={{ opacity: index === currentIndex ? "1" : "0.6" }}
                                    src={image} alt="something"
                                    onClick={() => setCurrentIndex(index)}
                                />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}