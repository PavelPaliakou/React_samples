import ModalPopup from "./modalPopup";
import { useState } from "react";

import "./styles.css";

export default function CustomModalPopup() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    return (
        <div className="container">
            <h1>Modal Popup</h1>
            <button onClick={() => setShowModalPopup(!showModalPopup)}>Open modal popup</button>
            {
                showModalPopup
                    && <ModalPopup onClose={() => setShowModalPopup(false)}/>
            }
        </div>
    )
}