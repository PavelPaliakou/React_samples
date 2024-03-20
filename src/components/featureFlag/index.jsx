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

//TODO: add styles and show list of components

export default function FeatureFlags() {

    const { loading, errorMessage, enableFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showAccordion",
            component: <AccordionBlock />
        },
        {
            key: "showAutocompleteSearch",
            component: <AutocompleteSearch />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColorGenerator />
        },
        {
            key: "showCustomModalPopup",
            component: <CustomModalPopup />
        },
        {
            key: "showCustomScrollIndicator",
            component: <CustomScrollIndicator />
        },
        {
            key: "showTabs",
            component: <CustomTabs />
        },
        {
            key: "showCustomUseFetchHook",
            component: <TestCustomUseFetchHook />
        },
        {
            key: "showCustomUseOutsideClickHook",
            component: <TestUseOutsideClickHook />
        },
        {
            key: "showCustomUseResponsiveHook",
            component: <TestUseResponsiveHook />
        },
        {
            key: "showLightAndDarkMode",
            component: <DarkLightMode />
        },
        {
            key: "showGithubSearch",
            component: <GithubSearch />
        },
        {
            key: "showImageSlider",
            component: <ImageSlider />
        },
        {
            key: "showLoadMore",
            component: <LoadMore />
        },
        {
            key: "showQRCodeGenerator",
            component: <QRCodeGenerator />
        },
        {
            key: "showScrollToParticularSection",
            component: <ScrollToParticularSection />
        },
        {
            key: "showStarRating",
            component: <StarRating />
        },
        {
            key: "showTopBottomScrollButton",
            component: <TopBottomScrollButton />
        },
        {
            key: "showTreeView",
            component: <TreeView />
        },
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