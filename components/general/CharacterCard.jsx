import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";

import { API_URL } from "@utils/API_URL";

const Wrapper = styled.div`
width: 100%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
border-radius: 6px;
padding: 1rem;
`;

const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
`;

const DetailGrid = styled.div`

& p {
    color: ${props => props.theme.colors.blue};
    font-size: 1.4rem;
}
`;

const More = styled.div``;


export const CharacterCard = ({ data }) => {
    const [id, setID] = useState(data.url.replace(`${API_URL}/people/`, ""));
    useEffect(() => {
        setID(data.url.replace(`${API_URL}/people/`, ""));
    }, []);
    return (
        <Wrapper>
            <Title>{data.name}</Title>
            <DetailGrid>
                <p>height: {data.height}</p>
                <p>mass: {data.mass}kg</p>
                <p>hair color: {data.hair_color}</p>
                <p>skin color: {data.skin_color}</p>
                <p>eye color: {data.eye_color}</p>
                <p>birth year: {data.birth_year}</p>
                <p>gender: {data.gender}</p>
            </DetailGrid>
            <More>
                <Link href={`character/${id}`}>Meer info</Link>
            </More>
        </Wrapper>
    )
};

export default CharacterCard;