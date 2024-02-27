import { useEffect } from "react";
import { useState } from "react"
import UserCard from "./userCard";
import "./styles.css";

export default function GithubSearch() {
    const [userData, setUserData] = useState({});
    const [userName, setUserName] = useState("tom");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const url = "https://api.github.com/users/";

    function handleSubmit(event) {
        event.preventDefault();

        const fromData = new FormData(event.target);
        const inputUserName = fromData.get("search-by-username");

        setUserName(inputUserName);
        event.target.reset();
    }

    useEffect(() => {
        async function fetchData() {
            fetch(`${url}${userName}`)
                .then((response) => {
                    if (response.ok) {
                        setErrorMessage("");
                        return response.json();
                    }
                    throw new Error("User not found");

                })
                .then((data) => {
                    if (data) {
                        setUserData(data);
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

    }, [userName]);

    return (
        <div className="container">
            <h1>Github profile search</h1>
                <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        name="search-by-username"
                        placeholder="Enter github username"/>
                    <button type="submit" >Search</button>
                </form>
            {
                loading
                    ? <p>Loading...</p>
                    : errorMessage
                        ? <p>{errorMessage}</p>
                        : <UserCard user={userData} />
            }
        </div>
    )
}