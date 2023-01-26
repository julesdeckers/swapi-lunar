import { useEffect, useState } from "react";

const useCharacterFetch = (urls) => {
    const [fulldata, setData] = useState(null);
    const [isFullLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const Promises = [];
        urls.forEach(url => {
            Promises.push(fetch(url));
        });
        Promise.all(Promises)
            .then(result => Promise.all(result.map((res) => res.json())))
            .then(data => {
                const Characters = [];
                for (let i = 0; i < data.length; i++) {
                    Characters.push(data[i].results);
                }
                const flat = Characters.flat(1);
                setData(flat);
                if (typeof window !== "undefined") {
                    window.localStorage.setItem("swapichars", JSON.stringify(flat));
                }
            });
        setLoading(false);
    }, [urls]);
    return { fulldata, isFullLoading };
};

export default useCharacterFetch;