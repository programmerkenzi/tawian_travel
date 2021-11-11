import { fetcher } from "../lib/utils"

export default {
    getScenicSpots: async function (city, name, nearby, top = 10) {

        let url = `/Tourism/ScenicSpot`

        let filter = `?$top=${top}&$format=JSON`

        if (city) url += `/${city}`
        if (name) filter += `&$filter=contains(Name,${encodeURIComponent(`'${name}'`)})`
        if (nearby) filter += `&$spatialFilter=nearby(${nearby.latitude},${nearby.longitude}, 5000)`
        url += `${filter}`
        return await fetcher(url, 'GET')
    },

    getActivities: async function (city, top = 10) {
        let url = `/Tourism/Activity`
        let filter = `?$top=${top}&$format=JSON`
        if (city) url += `/${city}`
        url += `${filter}`
        return await fetcher(url, 'GET')
    }

}