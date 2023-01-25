import styled from "styled-components";
import { useEffect, useState } from "react";

const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
`;

export const Starships = ({ urls }) => {
    const [starships, setStarships] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const Promises = [];
        urls.forEach(url => {
            Promises.push(fetch(url));
        });
        Promise.all(Promises).then(result => Promise.all(result.map((res) => res.json()))).then(data => setStarships(data));
        setLoading(false);
        console.log(starships)
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!starships) return <div><p>No film data</p></div>
    return (
        <>
            <Title>Starships</Title>
            <ul>
                {starships.map((ship, key) =>
                    <li key={key}>
                        {ship.name}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Starships;