import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image'
export default ({ items }) => {
    return (

        <Carousel
            autoPlay={true}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
        >

            {items.map(item => (
                <div className=" bg-gray-200">

                    <div className=' relative w-full md:max-w-5xl  h-[35vh] md:h-[500px]  mx-auto'>
                        <img
                            src={item.Picture.PictureUrl1}
                            loading="lazy"
                            alt={item.Name}
                            className='min-h-full min-w-full max-h-full max-w-full'
                        />
                        <div className=" absolute flex flex-row left-1 top-1 font-semibold text-xs text-white  items-center justify-between md:text-base md:left-2 md:top-2 opacity-95">
                            <LocationMarkerIcon className=" h-3 md:h-4" />
                            <span >{item?.Location}</span>
                            <span>{item?.Name}</span>
                        </div>

                    </div>
                </div>
            ))}







        </Carousel>
    )
}
