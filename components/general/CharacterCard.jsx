import styled from "styled-components";

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


export const CharacterCard = () => {
    return (
        <Wrapper>
            <Title>Luke Skywalker</Title>
            <DetailGrid>
                <p>height: 172</p>
                <p>mass: 77kg</p>
                <p>hair color: blond</p>
                <p>skin color: fair</p>
                <p>eye color: blue</p>
                <p>birth year: 19BBY</p>
                <p>gender: male</p>
            </DetailGrid>
        </Wrapper>
    )
};

export default CharacterCard;