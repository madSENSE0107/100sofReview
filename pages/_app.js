import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Head>
      <title>100 seconds of review</title>
      <meta name="description" content="Review of a movie in 100 seconds" />     
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>


  )

}

export default MyApp
