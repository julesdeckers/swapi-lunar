import { useEffect, useState } from "react";

export const useStored = () => {
    const [stored, setStored] = useState(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setStored(JSON.parse(window.localStorage.getItem("swapichars")));
        }
    }, []);
    return stored
};

export default useStored;