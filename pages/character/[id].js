import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

import { API_URL } from "@utils/API_URL";

import Films from "@components/character/Films";
import Starships from "@components/character/Starships";
import Vehicles from "@components/character/Vehicles";

const MainView = styled.div`
grid-area: main;
text-align: left;
margin-top: 10rem;
padding: 1rem;
height: auto;
`;

const Title = styled.h2`
font-size: 3rem;
font-weight: bold;
`;

export const CharacterDetail = ({ slug }) => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch(`${API_URL}/people/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);
    if (isLoading) return <p>Loading...</p>
    if (!data) return <div><p><Link href="/">Back</Link></p><p>No profile data</p></div>
    return (
        <MainView>
            <p><Link href="/">Back</Link></p>
            <Title>{data.name}</Title>
            <p>height: {data.height}</p>
            <p>mass: {data.mass}kg</p>
            <p>hair color: {data.hair_color}</p>
            <p>skin color: {data.skin_color}</p>
            <p>eye color: {data.eye_color}</p>
            <p>birth year: {data.birth_year}</p>
            <p>gender: {data.gender}</p>
            <Films urls={data.films}/>
            <Starships urls={data.starships}/>
        </MainView>
    )
};

export default CharacterDetail;