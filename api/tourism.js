import { fetcher } from "../lib/utils";

const generateUrl = (baseUrl, city, name, nearby, top = 10, skip = 0,) => {
    let url = baseUrl;
    let filter = `?$top=${top}&$skip=${skip}`
    if (city) url += `/${city}`
    if (name) filter += `&$filter=contains(Name,${encodeURIComponent(`'${name}'`)})`
    if (nearby) filter += `&$spatialFilter=nearby(${nearby.latitude},${nearby.longitude}, 5000)`
    url += `${filter}`
    return url;
}

export default {
    getScenicSpots: async function (city, name, nearby, top = 10) {
        let baseUrl = `/Tourism/ScenicSpot`

        const url = generateUrl(baseUrl, city, name, nearby, top)

        return await fetcher(url, 'GET')
    },

    getActivities: async function (city, name, nearby, top = 10) {
        let baseUrl = `/Tourism/Activity`

        const url = generateUrl(baseUrl, city, name, nearby, top)

        return await fetcher(url, 'GET')
    },
    getRestaurants: async function (city, name, nearby, top = 10) {
        let baseUrl = `/Tourism/Restaurant`
        const url = generateUrl(baseUrl, city, name, nearby, top)
        return await fetcher(url, 'GET')
    },
    get: async function (city, name, nearby, top = 10) {
        let baseUrl = `/Tourism/Hotel`
        const url = generateUrl(baseUrl, city, name, nearby, top)
        return await fetcher(url, 'GET')
    }


}