import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"


const Layout = ({children,titulo}) => {
  return (
    <>
    <Head>
      <title>{titulo}</title>
    </Head>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
