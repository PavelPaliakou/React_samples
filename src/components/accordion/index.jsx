import { useState } from "react";
import { data } from "./data.js";
import "./styles.css";

export default function Accordion() {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick(){
        isSelected ? setIsSelected(false) : setIsSelected(true);
    }

    return (
        <div className="main-container">
            <div>
                <button onClick={handleClick()}>
                    Enable/disable multiple accordion
                </button>
            </div>
            {data && data.length > 0 ? 
            data.map((e) => 
                <div key={e.id}>
                    <h1>{e.question}</h1>
                    <span>+</span>
                </div>
            )
            : <div>No data found</div> }
        </div>
    );
}