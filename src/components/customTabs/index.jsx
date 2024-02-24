import { useState } from "react";
import "./styles.css";

export default function CustomTabs() {
    const [currentTab, setCurrentTab] = useState(0);

    const data = [
        {
            title: "tab 1",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit cum consequuntur et sapiente natus molestias ad quibusdam sunt quis. Magnam labore eum voluptas fugiat quae deserunt ducimus accusantium maxime!"
        },
        {
            title: "tab 2",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit cum consequuntur et sapiusantium maxime!"
        },
        {
            title: "tab 3",
            content: "Lorem, ipsum dolor sit amserunt ducimus accusantium maxime!"
        },
        {
            title: "tab 4",
            content: "Lorem, ipsum dolcimus accusantium maxime!"
        }
    ]

    return (
        <div className="container">
            <h1>Custom Tabs</h1>
            <div className="tabs-container">
                {
                    data.map((element, index) =>
                        <div
                            key={element.title}
                            className={`tab-header ${index === currentTab ? "active" : ""}`}
                            onClick={() => setCurrentTab(index)}>
                            <span>{element.title}</span>
                        </div>
                    )
                }
            </div>
            <div className="tab-content">
                {data[currentTab].content}
            </div>
        </div>
    )
}