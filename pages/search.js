import { useRouter } from "next/dist/client/router";
import Header from '../components/Header';
import Filter from "../components/Filter";
export default function search(params) {

    const router = useRouter();
    const { city, type, query } = router.query;



    return (
        <div className=" relative w-full ">
            <Filter />

        </div>
    )
};

