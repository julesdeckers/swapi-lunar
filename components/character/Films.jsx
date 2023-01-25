import styled from "styled-components";
import { useEffect, useState } from "react";

import usePromiseFetch from "@lib/hooks/usePromiseFetch";

const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
`;

export const Films = ({ urls }) => {
    const {data, isLoading} = usePromiseFetch(urls);
    if (isLoading) return <p>Laden...</p>;
    if (!data) return <div> <Title>Films</Title><p>Film data laden...</p></div>;
    return (
        <>
            <Title>Films</Title>
            {isLoading
                ? <p>Loading...</p>
                : data.length >> 0
                    ? <ul>
                        {data.map((film, key) =>
                            <li key={key}>
                                {film.title}
                            </li>
                        )}
                    </ul>
                    : <p>Geen films</p>
            }
        </>
    )
}

export default Films;