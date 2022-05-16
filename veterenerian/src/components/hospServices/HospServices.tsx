import {getResource} from '../../services/services';
import './HospServices.css';
//import Advert from '../advertising/Advertising';
import { useEffect } from 'react';

const HospServices = () => {
       
    useEffect(() => {
        const data = getResource('http://fake/data/api/tabs')
        data.then(res => { 
            updateList(res);  
            //console.log('++', res)
        });   
    }); 

    interface ITabValues{
        title: string;
        description ?: string;
        cost: string;
    }
    interface IUniqObject{
        title: string;
        headers: string[];
        values: ITabValues[];
    }
     interface ISurgeon{
        title: string;
        consultation: IUniqObject;
        procedures: IUniqObject;
        oncological: IUniqObject;
        headAndNeck: IUniqObject;
        gastro: IUniqObject;
        hernia: IUniqObject;
        diagnostic: IUniqObject;
        thoracic: IUniqObject;
        genitourinarySystem: IUniqObject;
        liverAndBiliaryTract: IUniqObject;
        other: IUniqObject;
    } 

    interface ITherapy{
        title: string;
        consultation: IUniqObject;
        procedures: IUniqObject;
    }
    interface IStomac{
        title: string;
        consultation: IUniqObject;
        procedures: IUniqObject;
        operations: IUniqObject;
    }

    interface IVisualDiagnostics{
        title: string;
        radiography: IUniqObject;
        ultrasound: IUniqObject;
        contrast: IUniqObject;
        underControl: IUniqObject;
        computedTomography: IUniqObject;
    }
    interface ILaboratory{
        title: string;
        biochemistry: IUniqObject;
        urinalysis: IUniqObject;
        pcr: IUniqObject;
        tests: IUniqObject;
        cytological: IUniqObject;
        parasitological: IUniqObject;
        specific: IUniqObject;
        сoagulogram: IUniqObject;
        hematology: IUniqObject;
        immunityTension: IUniqObject;
        other: IUniqObject;
        hormonalFerrets: IUniqObject;
        hematologyBlood: IUniqObject;
        vetterritory: IUniqObject;
        microbiology: IUniqObject;
        tick: IUniqObject;
        urineStudy: IUniqObject;
        wool: IUniqObject;
        SpecificProteins: IUniqObject;
        infectiousFerrets: IUniqObject;
        PCRdogs: IUniqObject;
        vitamins: IUniqObject;
        dermatology: IUniqObject;
        expressDiagnostics: IUniqObject;
        hemostasis: IUniqObject;
        forHistologist: IUniqObject;
        PCRcats: IUniqObject;
        drugMonitoring: IUniqObject;
        pasteur: IUniqObject;
        PCRother: IUniqObject;
        analysis: IUniqObject;
        hormones: IUniqObject;
        PCRinfectionsDogs: IUniqObject;
        IFA: IUniqObject;
    }
    
    interface IObj{
        /* surgeon: ISurgeon;
        therapy: ITherapy;
        stomac:IStomac;
        visualDiagnostics: IVisualDiagnostics;
        laboratory:ILaboratory; */
        [key: string]:ISurgeon|ITherapy|IStomac|IVisualDiagnostics|ILaboratory
    }

    const updateList = (res:IObj) =>{
        //console.log(res);
        let values = [];
        for (let key in res){
            values.push(res[key]);
        }
        //setHospDepartment(items);
        
        renderHosp( values );

    }
    const renderHosp = ( values:(ILaboratory | IStomac| ISurgeon| ITherapy | IVisualDiagnostics)) => {
        for(let key in values){
            let servs = values[key];
            console.log('+',servs);

            for(let key in servs){
                let t = servs[key];
                console.log('t', t)
            }
           // console.log('++',items);
        }
    }

    /*function RenderValues() {
        return (
            <div className="services">
                <h2>Хирургия</h2>
                <div>
                    <h3>{data.title}</h3>
                    <div className="table__price">
                        <table>
                            <tr>{data.headers}</tr>
                            <tr>
                                <td>{data.values.title}</td>
                                <td>{data.values.description}</td>
                                <td>{data.values.cost}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }  */
    
    return (
        <>
              {/* <Advert /> */}  
            <div className="hosp__services">
               `сюда компонент вставляем`
            </div>
        </>
    );
} 

export default HospServices;