import Header from "@components/general/Header";
import styled from "styled-components";

const Container = styled.div`
width: 100vw;
height: calc(100vh - 10rem);
/* overflow: hidden; */
`;

const Layout = styled.div`
display: grid;
grid-template-columns: 20vw 1fr;
grid-template-areas: 
'header header'
'sidebar main'
'sidebar main';
`;

const SideBar = styled.div`
position: fixed;
left: 0;
top: 10rem;
width: 20vw;
background-color: ${props => props.theme.colors.blue};
grid-area: sidebar;
height: calc(100vh - 10rem);
`;

export const DefaultLayout = ({ children }) => {
    return (
        <Container>
            <Layout>
                <Header />
                <SideBar>
                    <p>Sidebar</p>
                    <h1>Swapi</h1>
                </SideBar>
                {children}
            </Layout>
        </Container>
    )
}

export default DefaultLayout;