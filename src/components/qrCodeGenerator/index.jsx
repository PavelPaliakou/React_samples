import QRCode from "react-qr-code";
import { useState } from "react";
import "./styles.css";

//Install "npm i react-qr-code" for this project

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [inputValue, setInputValue] = useState("");

    function handleQRCodeGenerate(value) {
        setQrCode(value);
        setInputValue("");
    }

    return (
        <div className="container">
            <h1>QR code generator</h1>
            <div className="qr-input-container">
                <input onChange={(e) => setInputValue(e.target.value)} type="text" name="qr-code" placeholder="Enter your value" />
                <button 
                    disabled={inputValue && inputValue.trim() !== "" ? false : true} 
                    onClick={() => handleQRCodeGenerate(inputValue)}>
                    Generate
                </button>
            </div>
            <div className="qr-code-container">
                <QRCode
                    id="qr-code"
                    value={qrCode}
                    size={400}
                    bgColor="white"
                />
            </div>
        </div>
    )
}