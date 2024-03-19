const mockApiResponse = {
    showAccordion: true,
    showAutocompleteSearch: true,
    showColorGenerator: true,
    showCustomModalPopup: true,
    showCustomScrollIndicator: true,
    showCustomTabs: true,
    showCustomUseFetchHook: true,
    showCustomUseOutsideClickHook: true,
    showCustomUseResponsiveHook: true,
    showDarkLightMode: true,
    showGitHubSearch: true,
    showImageSlider: true,
    showLoadMore: true,
    showQRCodeGenerator: true,
    showScrollToParticularSection: true,
    showStarRating: true,
    showTopBottomScrollButton: true,
    showTreeView: true,
};

export default function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(mockApiResponse) {
            setTimeout(resolve(mockApiResponse), 500)
        } else {
            reject("Error while calling API. Please try again");
        }
    });
}