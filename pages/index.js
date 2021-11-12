import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import tourism from '../api/tourism';
import Carousel from '../components/Carousel';
import FoodSection from '../components/FoodSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SpotSection from '../components/SpotSection';
import { selectIsAuthenticated } from '../slices/userSlice';


export default function Home({ activities, spots, restaurants }) {

  return (
    <div >
      <Carousel items={activities} />
      <SpotSection items={spots} />
      <FoodSection items={restaurants} />
    </div>
  )
}


export const getStaticProps = async () => {
  // user location by ip
  const currentLocation = await fetch('https://geolocation-db.com/json/')
  const currentLocationObj = await currentLocation.json()
  //  spots nearby
  let spots = await tourism.getScenicSpots(null, null, currentLocationObj, 15);
  if (!spots.length) spots = await tourism.getScenicSpots(null, null, null, 15);

  // activities with img for banner
  const activities = await tourism.getActivities(null, null, null, 30)
  const activitiesWithImages = await activities.filter(activity => activity.Picture.PictureUrl1)

  // restaurant nearby
  let restaurants = await tourism.getRestaurants(null, null, currentLocationObj, 15);
  if (!restaurants.length) restaurants = await tourism.getRestaurants(null, null, null, 15);



  return { props: { activities: activitiesWithImages, spots: spots, restaurants: restaurants } }
}