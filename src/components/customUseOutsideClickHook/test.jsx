import { useRef, useState } from "react"
import useOutsideClick from ".";

export default function TestUseOutsideClickHook(){

    const ref = useRef();
    const [showContent, setShowContent] = useState(false);
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div>
            <h1>Test useOutsideClickHook</h1>
            {
                showContent
                ? <div ref={ref} style={{backgroundColor: "whitesmoke"}}>
                    <p>Some hidden content</p>
                    <p>Some hidden content</p>
                    <p>Some hidden content</p>
                    <p>Some hidden content</p>
                </div>
                : <button onClick={() => setShowContent(true)}>show content</button>
            }
        </div>
    )
}