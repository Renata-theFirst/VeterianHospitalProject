/* import * as dataService from "../serverInfo.json";*/
const dataService = require("../serverInfo.json");
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

/* async function getResource(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();

} */

async function getResource(url) {
    const routeParts = url.split('/');
    return dataService.tabs[routeParts[0]][routeParts[1]];
}

export {postData};
export {getResource};