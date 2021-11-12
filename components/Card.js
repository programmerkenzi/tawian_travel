import Image from 'next/image'
import { LocationMarkerIcon, PhotographIcon } from '@heroicons/react/solid';



export default ({ imageUrl, name, location, }) => {

    return (

        <div className={`relative flex-shrink-0 h-[150px]  w-[150px] md:h-72 md:w-72 rounded-md overflow-hidden shadow cursor-pointer hover:scale-105 transform duration-300 ease-out ${!imageUrl && 'bg-blue-400'}`}>
            {imageUrl ?
                <img
                    src={imageUrl}
                    loading="lazy"
                    alt={name}
                    className='min-h-full min-w-full max-h-full max-w-full'
                /> :

                <PhotographIcon className='text-blue-300 h-[120px] md:h-[200px]  mx-auto my-[50%] transform -translate-y-1/2 ' />
            }


            <div className=" absolute flex flex-row left-1 top-1 font-semibold text-xs text-white  items-center justify-between md:text-base md:left-2 md:top-2 opacity-95 ">
                <LocationMarkerIcon className=" h-3 md:h-4" />
                <span >{location}</span>
            </div>
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-white md:text-lg opacity-95">
                <span>{name}</span>
            </div>
        </div>
    )
}
