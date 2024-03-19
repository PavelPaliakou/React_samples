import AccordionBlock from "../accordion";
import AutocompleteSearch from './autocompleteSearch';
import RandomColorGenerator from "../colorGenerator";
import CustomModalPopup from './customModalPopup';
import CustomScrollIndicator from './customScrollIndicator';
import CustomTabs from "../customTabs";
import TestCustomUseFetchHook from './customUseFetchHook/test';
import TestUseOutsideClickHook from './customUseOutsideClickHook/test';
import TestUseResponsiveHook from './CustomUseResponsiveHook/test';
import DarkLightMode from "../darkLightMode";
import GithubSearch from './githubSearch';
import ImageSlider from './imageSlider';
import LoadMore from './loadMore';
import QRCodeGenerator from './qrCodeGenerator';
import ScrollToParticularSection from './scrollToParticularSection';
import StarRating from "../starRating";
import TopBottomScrollButton from './components/topBottomScrollButton';
import TreeView from "../treeView";
import { FeatureFlagsContext } from "./context";

import "./styles.css";
import { useContext } from "react";

//TODO: add all components
//TODO: add styles and show list of components

export default function FeatureFlags() {

    const { loading, errorMessage, enableFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showRandomColorGenerator",
            component: <RandomColorGenerator />
        },
        {
            key: "showLightAndDarkMode",
            component: <DarkLightMode />
        },
        {
            key: "showStarRating",
            component: <StarRating />
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