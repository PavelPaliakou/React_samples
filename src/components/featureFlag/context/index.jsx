import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [enableFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        //original service call
        try {
            setLoading(true);

            //original service call
            const response = await featureFlagsDataServiceCall();

            setEnabledFlags(response);
            setLoading(false);

        } catch (error) {
            setLoading(false);

            console.log(error);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return (
        <FeatureFlagsContext.Provider value={{ loading, errorMessage, enableFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}