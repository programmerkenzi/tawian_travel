import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import tourism from '../api/tourism';
import Carousel from '../components/Carousel';
import FoodSection from '../components/FoodSection';
import Header from '../components/Header';
import SpotSection from '../components/SpotSection';
import { selectIsAuthenticated } from '../slices/userSlice';


export default function Home({ activities, spots }) {

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col  min-h-screen overflow-hidden">
      <Head>
        <title>Taiwan Travel</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="twicon/twicon.css"></link>
      </Head>
      <Header />
      <main className=" flex flex-col  w-full   text-center mt-[50px] md:mt-[80px] ">
        <Carousel items={activities} />
        <SpotSection items={spots} />
        <FoodSection items={activities} />
      </main>


      {/* <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div>
  )
}


Home.getInitialProps = async () => {
  // const randomCities = getRandomItem(city, 10)
  const currentLocation = await (await fetch('https://geolocation-db.com/json/')).text()
  console.log(`currentLocation`, currentLocation)
  let spots = await tourism.getScenicSpots(null, null, currentLocation, 15);
  console.log(`spots`, spots)
  if (!spots.length) spots = await tourism.getScenicSpots(null, null, null, 15);
  console.log(`spots2`, spots)

  const activities = await tourism.getActivities(null, 15)
  const activitiesWithImages = await activities.filter(activity => activity.Picture.PictureUrl1)
  // console.log('activities :>> ', new Date(activities[0].EndTime) - new Date());

  // console.log(`spots`, spots)
  return { activities: activitiesWithImages, spots: spots }
}