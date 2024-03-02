// import { useRef } from "react";
import TestCustomUseFetchHook from "../customUseFetchHook/test";

export default function TopBottomScrollButton() {

    //Another way to scroll in the comments
    // const bottomRef = useRef(null);
    // function handleScrollToBottom() {
    //     bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    // }


    function handleScrollButton(directions) {
        let yCoord = 0;
        if (directions === "top") {
            yCoord = 0
        } else {
            yCoord = document.body.scrollHeight;
        }

        window.scrollTo({ top: yCoord, left: 0, behavior: 'smooth' });
    }

    return (
        <div className="container">
            <h1>Top and bottom scroll component</h1>
            <h2>Top of the page</h2>
            <button onClick={() => handleScrollButton("bottom")}>Go to bottom</button>
            {/* <button onClick={() => handleScrollToBottom()}>Go to bottom</button> */}
            <TestCustomUseFetchHook />
            <button onClick={() => handleScrollButton("top")}>Go to top</button>
            <h2>Bottom of the page</h2>
            {/* <div ref={bottomRef}></div> */}
        </div>
    )
}