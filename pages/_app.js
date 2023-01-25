import Router from 'next/router';
import nProgress from 'nprogress';
import '@styles/progressbar.css';
import DefaultLayout from "../layouts/default";
import 'modern-normalize';
import '../styles/globals.scss';
import { ThemeProvider } from "styled-components";
import { colors } from "@utils/palette";

//Binding events. 
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());


const theme = {
  colors: colors,
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default MyApp
