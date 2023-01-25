import styled from "styled-components";
import { useEffect, useState } from "react";

export const Films = ({ urls }) => {
    const [films, setFilms] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const FetchFilms = async (url) => {
        const result = await fetch(url)
        console.log(result.body);
    }
    useEffect(() => {
        // console.log(urls.length);
        setLoading(true)
        const Promises = [];
        urls.forEach(url => {
            Promises.push(fetch(url));
        });
        Promise.all(Promises).then(result => Promise.all(result.map((res) => res.json()))).then(data => setFilms(data));
        setLoading(false);
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!films) return <div><p>No film data</p></div>
    return (
        <>
        <h3>Films</h3>
        <ul>
            {films.map((film, key) =>
                <li key={key}>
                    {film.title}
                </li>
            )}
        </ul>
        </>
    )
}

export default Films;