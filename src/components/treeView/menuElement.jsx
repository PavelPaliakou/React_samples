import { useState } from "react"
import MenuList from "./menuList";

export default function MenuElement({ element = null }) {
    const [isExpand, setExpand] = useState(false);

    return (
        <>
            {
                element
                    ? <div className="tree-items">
                        <div className="item-container">
                            <div className="item-name">{element.label}</div>
                            {
                                element.children
                                    ? <div className="item-expand" onClick={() => setExpand(!isExpand)}>
                                        {isExpand ? " - " : " + "}
                                    </div>
                                    : null
                            }
                        </div>
                        {
                            isExpand && element.children
                                ? <MenuList list={element.children} />
                                : null
                        }
                    </div>

                    : null
            }
        </>
    )
}