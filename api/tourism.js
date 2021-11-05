import { fetcher } from "../lib/utils"

export default {

    getScenicSpotsByCity: async function (city) {
        return await fetcher('/Tourism/ScenicSpot?$top=10&$format=JSON')
    }


}