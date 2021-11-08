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

                    <div className=' relative w-full md:max-w-5xl  h-72 md:h-[500px]  mx-auto'>
                        <Image
                            src={item.Picture.PictureUrl1}
                            layout="fill"
                            objectFit="cover" />
                        <div>

                        </div>
                        <div className=" absolute flex flex-row left-1 top-1 font-semibold text-xs text-white  items-center justify-between md:text-base md:left-2 md: top-2">
                            <LocationMarkerIcon className=" h-3 md:h-4" />
                            <span >{item.Location}</span>
                            <span>{item.Name}</span>
                        </div>

                    </div>
                </div>
            ))}







        </Carousel>
    )
}
