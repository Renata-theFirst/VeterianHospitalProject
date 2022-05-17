 //import { useCallback } from "react";
const dataService = require ("../serverInfo2.json");

/* const dataService = require("../serverInfo.json");
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
}; */
interface IDataService{
    [key:string]:any    
}

async function getResource(url: string){
    const routeParts = url.split('/').pop()||'';
    return (dataService as IDataService)[routeParts]
} 

//export {postData};
 export {getResource}; 

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