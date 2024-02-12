import { useState } from "react";
import { data } from "./data.js";
import "./styles.css";

//FIXME: bug when expand in single mode and then switch to multiple mode
//TODO: show/hide in multiple mode

export default function AccordionBlock() {
    const [selectedItem, setSelectedItem] = useState(null);
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

            setSelectedItem(null);
            setSelectedItems(newItems);

        } else {
            if (selectedItem === id) {
                setSelectedItem(null);
            } else {
                setSelectedItem(id);
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
                        <div className="show-hide" onClick={() => expandHandle(e.id)}>
                            {
                                selectedItem === e.id || selectedItems.indexOf(e.id) !== -1 ?
                                    <span>hide</span>
                                    : <span>show</span>
                            }
                        </div>

                        {
                            selectedItem === e.id || selectedItems.indexOf(e.id) !== -1 ?
                                <div className="accordion-content">{e.answer}</div>
                                : null
                        }

                    </div>
                ))
                : <div>No data found</div>}
        </div>
    );
}