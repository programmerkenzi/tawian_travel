import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import tourism from '../api/tourism';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import city from '../data/city';
import { selectIsAuthenticated, setIsAuthenticated } from '../slices/userSlice';
import { getRandomItem } from './../lib/utils';


export default function Home({ name }) {

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next app template</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="twicon/twicon.css"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-12 text-center">
        <Carousel />
        <span>Hi,{name}</span>
        <span className=" text-xl text-blue-800">is authenticated: {isAuthenticated.toString()}</span>
        <button onClick={() => dispatch(setIsAuthenticated(!isAuthenticated))} className="button">setIsAuthenticated</button>
      </main>


      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  )
}


Home.getInitialProps = async () => {
  const randomCities = getRandomItem(city, 10)
  // const spots = await tourism.getScenicSpots('Taipei', '櫻花')
  // console.log(`spots`, spots)
  return { city: randomCities }
}