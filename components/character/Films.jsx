import styled from "styled-components";
import { useEffect, useState } from "react";

const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
`;

export const Films = ({ urls }) => {
    const [films, setFilms] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
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
            <Title>Films</Title>
            {isLoading
                ? <p>Loading...</p>
                : <ul>
                    {films.map((film, key) =>
                        <li key={key}>
                            {film.title}
                        </li>
                    )}
                </ul>
            }
        </>
    )
}

export default Films;