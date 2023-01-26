import { useEffect, useState } from "react";

const usePromiseFetch = (urls) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const Promises = [];
        urls.forEach(url => {
            Promises.push(fetch(url));
        });
        Promise.all(Promises)
            .then(result => Promise.all(result.map((res) => res.json())))
            .then(data => {
                setData(data);
                console.log(data);
            });
        setLoading(false);
    }, [urls]);
    return { data, isLoading };
};

export default usePromiseFetch;