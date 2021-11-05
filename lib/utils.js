import jsSHA from 'jssha';



function getAuthorizationHeader() {
    var AppID = process.env.TPX_APP_ID
    var AppKey = process.env.TPX_APP_KEY

    var GMTString = new Date().toGMTString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString, 'Accept-Encoding': 'gzip' }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}


export const fetcher = async (url, method) => {
    const baseURL = 'https://ptx.transportdata.tw/MOTC/v2'
    const fetchUrl = baseURL + url
    const headers = getAuthorizationHeader();
    const res = await fetch(fetchUrl, { method: method, headers: headers })
    const data = await res.json();
    return data;

}


export const getRandomItem = (arr, length) => {
    let items = [...arr]
    const itemsPicked = [];

    for (let i = 0; i < length; i++) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * items.length);
        // get random item
        const item = arr[randomIndex];
        itemsPicked.push(item);
        items.splice(randomIndex, 1)
    }

    return itemsPicked;
}