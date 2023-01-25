import styled from "styled-components";
import { useEffect, useState } from "react";

const Title = styled.h2`
font-size: 2rem;
font-weight: bold;
`;

export const Vehicles = ({ urls }) => {
    const [vehicles, setVehicles] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        const Promises = [];
        urls.forEach(url => {
            Promises.push(fetch(url));
        });
        Promise.all(Promises).then(result => Promise.all(result.map((res) => res.json()))).then(data => setVehicles(data));
        setLoading(false);
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!vehicles) return <div><p>No film data</p></div>
    return (
        <>
            <Title>vehicles</Title>
            <ul>
                {vehicles.map((veh, key) =>
                    <li key={key}>
                        {veh.name}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Vehicles;