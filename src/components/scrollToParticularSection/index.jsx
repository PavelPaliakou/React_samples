import { useRef } from "react";
import "./styles.css";

export default function ScrollToSection() {
    const refs = useRef([]);

    const sections = [
        {
            label: "First Section",
            style: {
                background: "red",
            },
        },
        {
            label: "Second Section",
            style: {
                background: "grey",
            },
        },
        {
            label: "Third Section",
            style: {
                background: "blue",
            },
        },
        {
            label: "Fourth Section",
            style: {
                background: "green",
            },
        },
        {
            label: "Fifth Section",
            style: {
                background: "orange",
            },
        },
    ];


    function handleScrollToSection(sectionIndex) {
        let pos = refs.current[sectionIndex].getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    }

    return (
        <div className="container">
            <h1>Scroll to a particular section</h1>
            {
                sections.map((element, index) => (
                    <button key={index} onClick={() => handleScrollToSection(index)}>
                        Go to {element.label}
                    </button>
                ))
            }

            {sections.map((element, index) => (
                <section key={index}
                    ref={(e) => (refs.current[index] = e)}
                    className="section-container"
                    style={element.style}>

                    <h2>{element.label}</h2>

                </section>
            ))}
        </div>
    );
}