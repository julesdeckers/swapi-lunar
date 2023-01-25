import styled from "styled-components";
import { useEffect, useState } from "react";

import usePromiseFetch from "@lib/hooks/usePromiseFetch";

const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
`;

export const Starships = ({ urls }) => {
    const {data, isLoading} = usePromiseFetch(urls);
    if (isLoading) return <p>Laden...</p>;
    if (!data) return <div><Title>Starships</Title><p>Starship data laden...</p></div>;
    return (
        <>
            <Title>Starships</Title>
            {isLoading
                ? <p>Loading...</p>
                : data.length >> 0
                    ? <ul>
                        {data.map((ship, key) =>
                            <li key={key}>
                                {ship.name}
                            </li>
                        )}
                    </ul>
                    : <p>Geen starships</p>
            }
        </>
    )
}

export default Starships;