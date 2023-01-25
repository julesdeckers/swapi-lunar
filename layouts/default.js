import Header from "@components/general/Header";

export const DefaultLayout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default DefaultLayout;