import useLocalStorage from "./useLocalStorage"
import "./styles.css";

export default function DarkLightMode() {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    function handleToggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return ( 
        <div className="container"  data-theme={theme}>
            <div className="dark-light-container">
                <h1>Dark Light Mode</h1>
                <button onClick={() => handleToggleTheme()}>Change mode</button>
            </div>
        </div>
    )
}