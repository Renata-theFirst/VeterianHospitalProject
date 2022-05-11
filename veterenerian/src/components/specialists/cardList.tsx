import React from 'react';
import Pic from '../additional/pic';


interface IDataElem{
    src:string,
    name:string,
    qualification:string
}

interface IDataList{
    data: IDataElem[]
}

const DocCardList = (props:IDataList) => {
    const renderData = props.data.map((elem, index) =>{
        return(
        <DocCard {...elem} key={`doc-${index}`}/>
        );
    });
    return(
        <>
            {renderData}
        </>
    );
}

const DocCard:React.FC<IDataElem> = ({src, name, qualification}) => {
        return(
            <div className="hosp__doc" >
                <Pic id={src} className="hosp__docs_img"/>
                <div className="hosp__doc-container">
                    <h3 className="hosp__docs_name">{name}</h3>
                    {qualification}
                </div>   
            </div>
        );
}
export {DocCardList, DocCard};

