import { useEffect } from "react";
import { useState } from "react"
import "./styles.css";

export default function CustomScrollIndicator() {
    const url = "https://dummyjson.com/products?limit=100";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        async function fetchData() {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response;
                })
                .then((data) => {
                    if (data) {
                        setData(data.products);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setErrorMessage(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        }

        fetchData();
    },[url]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log("body top :" + document.body.scrollTop);
            // console.log("docElem top :" + document.documentElement.scrollTop);
            // console.log("docElem height :" + document.documentElement.scrollHeight);
            // console.log("docElem client height :" + document.documentElement.clientHeight);

            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = document.body.scrollTop || document.documentElement.scrollTop;

            setScrollProgress((progress / height) * 100);
        })

        return () => {
            window.removeEventListener("scroll", () => { });
        }
    });

    if (loading) {
        return <div>Loading...</div>
    }

    if (errorMessage) {
        return <div>{errorMessage}</div>
    }

    return (
        <div className="container">
            <div className="head-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="full-progress-bar-container">
                    <div className="current-progress-bar-container"
                    style={{width : `${scrollProgress}%`}}></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data.map((e) => <p key={e.id}>{e.title}</p>)
                }
            </div>
        </div>
    )
}