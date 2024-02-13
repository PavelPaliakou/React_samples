import { useState } from "react";
import { data } from "./data.js";
import "./styles.css";

//FIXME: hide all content when disabled multi selection

export default function AccordionBlock() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isMultiSelection, setIsMultiSelection] = useState(false);

    function multiSelectionHandle(isPressed) {
        setIsMultiSelection(isPressed);
    }

    function expandHandle(id) {
        if (isMultiSelection) {
            let newItems = Array.from(selectedItems);

            if (selectedItems.includes(id)) {
                newItems.splice(selectedItems.indexOf(id), 1);
            } else {
                newItems.push(id);
            }

            setSelectedItems(newItems);

        } else {
            if (selectedItems.includes(id)) {
                setSelectedItems([]);
            } else {
                setSelectedItems([id]);
            }
        }

    }

    return (
        <div className="main-container">

            <button onClick={() => multiSelectionHandle(!isMultiSelection)}>
                { isMultiSelection ? "Disable" : "Enable"} multi selection
            </button>

            {data && data.length > 0 ?
                data.map((e) => (
                    <div key={e.id} className="accordion-container">
                        <div>
                            <h1>{e.question}</h1>
                        </div>
                        <span className="show-hide" onClick={() => expandHandle(e.id)}>
                            {
                                selectedItems.indexOf(e.id) !== -1 ? "hide" : "show"
                            }
                        </span>

                        {
                            selectedItems.indexOf(e.id) !== -1 ?
                                <div className="accordion-content">{e.answer}</div>
                                : null
                        }

                    </div>
                ))
                : <div>No data found</div>}
        </div>
    );
}