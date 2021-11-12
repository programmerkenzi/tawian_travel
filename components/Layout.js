import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';


export default ({ children }) => {
    return (
        <div className="flex flex-col  min-h-screen ">
            <Head>
                <title>Taiwan Travel</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="twicon/twicon.css"></link>
            </Head>
            <Header />
            <main className=" flex flex-col w-full text-center mt-[50px] md:mt-[80px] mb-9  ">
                {children}
            </main>

            <Footer />


        </div>
    )
}
