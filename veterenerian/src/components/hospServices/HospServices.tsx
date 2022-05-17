import {getResource} from '../../services/services';
import './HospServices.css';
//import Advert from '../advertising/Advertising';
import {useEffect, useState} from 'react';

interface ITabValues{
    title: string;
    description: string;
    cost: string;
}
interface IUniqObject{
    title: string;
    headers: string[];
    values: ITabValues[];
}
export interface IMedicalServices{
    title: string;
    consultation: IUniqObject;
    procedures: IUniqObject;
} 

export interface IServices{
    [key : string] : IMedicalServices;
} 

export const HospServices = () => {
    const [data, setData] = useState<IServices | null>(null);
       
    useEffect(() => {
        getResource('http://fake/data/api/tabs')
        .then(res => { 
            setData(res); 
        });  
    },[]); 

    function RenderTable(data: ITabValues) {
        return(
            <tr>
                <td>{data.title}</td>   
                <td>{data.description}</td>   
                <td>{data.cost}</td>   
            </tr>
        );
    }

    const RenderValues = (data: IMedicalServices, title: string) =>  {

        const tab1 = data.consultation.values.map((value, i)=>{
            return (RenderTable(value))
        });

        const tab2 = data.procedures.values.map((value, i)=>{
            return (RenderTable(value))
        });

        return (
            <div className="services">
                <h2>{title}</h2> 
                <div>
                    <h3>{data.consultation.title}</h3>
                    <div className="table__price">
                        <table>
                            <tr>
                                <td>{data.consultation.headers[0]}</td>
                                <td>{data.consultation.headers[1]}</td>
                                <td>{data.consultation.headers[2]}</td>
                            </tr>
                            {tab1}
                        </table>   
                    </div>
                    <h3>{data.procedures.title}</h3>
                    <div className="table__price">
                        <table>
                            <tr>
                                <td>{data.procedures.headers[0]}</td>
                                <td>{data.procedures.headers[1]}</td>
                                <td>{data.procedures.headers[2]}</td>
                            </tr>
                            {tab2}
                        </table>
                    </div>
                </div>
            </div> 
        );
    } 

    if(data){
        let rDataService = [];
        for(let key in data){
            rDataService.push(RenderValues(data[key], data[key].title));
        };

        return (
            <div className="hosp__services">
                {rDataService}
            </div>
        );
    }

    else{ return(<div></div>);}
} 
    