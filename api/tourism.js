import { fetcher } from "../lib/utils"

export default {

    getScenicSpots: async function (city, name) {
        let url = `/Tourism/ScenicSpot`

        let filter = `?$top=10&$format=JSON`

        if (city) url += `/${city}`
        if (name) filter += `&$filter=contains(Name,${encodeURIComponent(`'${name}'`)})`

        url += `${filter}`
        return await fetcher(url, 'GET')
    }


}