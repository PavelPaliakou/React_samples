import { useState } from "react"

export default function MenuElement(element = null) {
    const [isExpand, setExpand] = useState(false);

    return (
        <>
            {
                element
                    ? <div className="item-container">
                        <div className="item-name">{element.label}</div>
                        <div className="item-expand" onClick={() => setExpand(!isExpand)}>
                            {
                                isExpand
                                    ? <span>-</span>
                                    : <span>+</span>
                            }
                        </div>
                    </div>

                    : null
            }
        </>
    )
}