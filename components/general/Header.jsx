import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/starwars.svg";

const Wrapper = styled.div`
background-color: ${props => props.theme.colors.black};
height: 10rem;
width: 100%;
display: grid;
place-items: center;
position: fixed;
top: 0;
left: 0;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Logo = styled.div`
width: 4rem;
`;

export const Header = () => {
	return <Wrapper><Logo><Image src={logo} alt="Star Wars" /></Logo></Wrapper>;
};

export default Header;
