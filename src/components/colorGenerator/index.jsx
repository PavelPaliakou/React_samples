import { useEffect, useState } from "react"
import "./styles.css"

//FIXME: warning in useEffect dependency!

export default function RandomColorGenerator() {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#139fe5");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    function colorTypeHandler(e) {
        setColorType(e.target.value);
    }

    function generateColorHandler() {
        if (colorType === "hex") {
            let hexColor = '#';

            for (let i = 0; i < 6; i++) {
                hexColor += hex[Math.floor(Math.random() * hex.length)];
            }

            setColor(hexColor);
        }

        if (colorType === "rgb") {
            let rgbColor = "rgb("
                + Math.floor(Math.random() * 256) + ","
                + Math.floor(Math.random() * 256) + ","
                + Math.floor(Math.random() * 256) + ")";

            setColor(rgbColor);
        }
    }

    useEffect(()=> {
        generateColorHandler();
    }, [colorType]);

    return (
        <div className="color-generator-container" style={{ backgroundColor: color }}>
            <div className="controls">
                <fieldset className="color-types">
                    <legend>Color type</legend>
                    <div className="type-group">
                        <input onChange={colorTypeHandler} type="radio" name="color-type" id="hex" value={"hex"} defaultChecked />
                        <label htmlFor="hex">HEX</label>
                    </div>
                    <div className="type-group">
                        <input onChange={colorTypeHandler} type="radio" name="color-type" id="rgb" value={"rgb"} />
                        <label htmlFor="rgb">RGB</label>
                    </div>
                </fieldset>
                <button onClick={() => generateColorHandler()}>Generate color</button>
            </div>
            <div className="color-description">
                {color}
            </div>
        </div>
    )
}