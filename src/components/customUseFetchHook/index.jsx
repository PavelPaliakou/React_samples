import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url, options = []) {
    // 3 states
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);

        try {
            const response = await fetch(url, { ...options });

            if (!response.ok) {
                throw new Error(`${response.statusText}. Error while fetching data`);
            }

            const result = await response.json();

            setData(result);
            setLoading(false);
            setError(null);


        } catch (error) {
            setError(`${error}. Error while fetching data`);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
}