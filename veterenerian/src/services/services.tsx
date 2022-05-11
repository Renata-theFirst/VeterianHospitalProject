 export {};
 //import { useCallback } from "react";

/* import * as dataService from "../serverInfo.json";

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

async function getResource(url) {
    const routeParts = url.split('/');
    return dataService[routeParts[0]];
}

export {postData};
export {getResource}; */

/* export const useUrl = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try{
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            throw e;
        }
    }, []);
}  */