import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../redux/store'
import GlobalStyle from '../styles/global';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>nextjs</title>
      <meta name="description" content="next app dashboard" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>

  </>
}

export default MyApp
