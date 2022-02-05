import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   <>
//   <Head>
//     <link
//       href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
//       rel="stylesheet"
//     />
//   </Head>
//   return <Component {...pageProps} />
// }

// export default MyApp;

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;