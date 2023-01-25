import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo2x.png";

const Wrapper = styled.div`
background-color: #00A3A3;
height: 10rem;
width: 100%;
display: grid;
place-items: center;
`;

export const Header = () => {
	return <Wrapper><Image src={logo} alt="Pampers" /></Wrapper>;
};

export default Header;
