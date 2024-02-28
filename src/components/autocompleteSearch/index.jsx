import { useState } from "react";
import { useEffect } from "react";
import Suggestions from "./suggestions";
import "./styles.css";

export default function AutocompleteSearch() {
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [names, setNames] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]); 

    const url = "https://dummyjson.com/users?limit=0";

    function handleChange(event) {
        const query = event.target.value.toLowerCase();

        setSearchParam(query);

        if(query.length > 1) {
            const filteredData = names && names.length
            ? names.filter((userName) => userName.toLowerCase().indexOf(query) > -1 )
            : [];

            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        setShowDropdown(false);
        setFilteredUsers([]);
        setSearchParam(event.target.innerText);
    }

    useEffect(() => {
        async function fetchUsers() {
            fetch(`${url}`)
            .then((response) => {
                if (response.ok) {
                    setErrorMessage("");
                    return response.json();
                }
                throw response;
            })
            .then((data)=> {
                if (data) {
                    setErrorMessage("");
                    return setNames(data.users.map((user) => user.firstName))
                }
                throw new Error("Error while fetching data");
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
            })
            .finally(() => {setLoading(false)})
        }

        fetchUsers();
    },[]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (errorMessage) {
        return <p>{errorMessage}</p>
    }

    return (
        <div className="container">
            <h1>Auto complete Search</h1>
            <input 
            type="text" 
            name="search-users" 
            value={searchParam}
            onChange={(e) => handleChange(e)}
            placeholder="Enter username here..." />
            {
                showDropdown 
                ? <Suggestions handleClick={handleClick} data = {filteredUsers} />
                : null
            }
        </div>
    )
}