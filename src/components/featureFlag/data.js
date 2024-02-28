const mockApiResponse = {
    showLightAndDarkMode: false,
    showStarRating: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showTreeView: true,
    showTabs: true
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