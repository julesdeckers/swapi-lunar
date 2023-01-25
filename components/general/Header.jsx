import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
background-color: #00A3A3;
height: 10rem;
width: 100%;
display: grid;
place-items: center;
`;

export const Header = () => {
	return <Wrapper></Wrapper>;
};

export default Header;
