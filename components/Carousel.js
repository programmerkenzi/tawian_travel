import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default (params) => {
    return (
        <Carousel
            plugins={[
                'arrows',
                'infinite'
            ]}
        >
            <div className=" w-[500px] h-[500px] bg-gray-300" ></div>
            <div className=" w-[500px] h-[500px] bg-gray-400" ></div>
            <div className=" w-[500px] h-[500px] bg-gray-500" ></div>
            <div></div>
        </Carousel>
    )
}
