
import { useRouter } from 'next/dist/client/router';

export default () => {

    const router = useRouter()

    return (
        <div className="flex flex-row  space-x-0  sm:space-x-1  absolute left-0 sm:left-5 scale-50 sm:scale-100 cursor-pointer hover:scale-105 transition-all transform ease-in"
            onClick={() => router.push('/')}

        >
            <i className="twicon-main-island opacity-50 md:opacity-100 text-blue-500 text-[50px]"></i>
            <div className=' absolute md:relative     sm:flex flex-col mt-1 text-blue-500 font-black  not-italic leading-tight'>
                <span className=' text-[10px] sm:hidden' >Taiwan  Travel</span>
                <span className='hidden sm:block' >Taiwan</span>
                <span className='hidden sm:block ml-[8px]'>Travel</span>
            </div>
        </div>
    )
}
