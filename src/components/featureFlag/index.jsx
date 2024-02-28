import AccordionBlock from "../accordion";
import RandomColorGenerator from "../colorGenerator";
import CustomTabs from "../customTabs";
import DarkLightMode from "../darkLightMode";
import StarRating from "../starRating";
import TreeView from "../treeView";
import { FeatureFlagsContext } from "./context";

import "./styles.css";
import { useContext } from "react";

//TODO: add styles and show list of components

export default function FeatureFlags() {

    const { loading, errorMessage, enableFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <DarkLightMode />
        },
        {
            key: "showStarRating",
            component: <StarRating />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColorGenerator />
        },
        {
            key: "showAccordion",
            component: <AccordionBlock />
        },
        {
            key: "showTreeView",
            component: <TreeView />
        },
        {
            key: "showTabs",
            component: <CustomTabs />
        }
    ];

    function checkEnabledFlags(currentKey) {
        return enableFlags[currentKey];
    };

    if (loading) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        )
    };

    if (errorMessage) {
        return (
            <div className="container">
                <h1>{errorMessage}</h1>
            </div>
        )
    };

    return (
        <div className="container">
            <h1>Feature Flag</h1>
            {
                componentsToRender.map((element) => 
                    checkEnabledFlags(element.key)
                        ? element.component
                        : null
                )
            }
        </div>
    )
}   