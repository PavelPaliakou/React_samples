import { useState } from "react";
import "./styles.css"

export default function StarRating() {
    const numberOfStars = 10;
    const starsArray = new Array(numberOfStars).fill(0);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
    }

    function handleMouseMove(index) {
        setHover(index)
    }

    function handleMouseLeave() {
        setHover(0);
    }


    return (
        <div className="stars-container">
            {
                starsArray.map((_, index) => {
                    index++;

                    return (
                        <span className={`star ${index <= (hover || rating) ? "active" : ""}`}
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    )
                })
            }
        </div>
    )
}