import React from 'react';
import './styles.css';
import sizeIcon from '../../img/dimensions.svg';
import suiteIcon from '../../img/bathtub.svg';
import bedroomIcon from '../../img/bed.svg';
import parkingIcon from '../../img/sedan.svg';
import Attribute from '../Attribute';

export default function AttributesDetails({card}){

    const sizeValue = card.attributes.size;
    const suitesValue = card.attributes.suites;
    const bedroomValue = card.attributes.bedrooms;
    const parkingValue = card.attributes.parking;

    const suitsDtails = (suitesValue>1) ? ("suites") : ("suite");
    const bedroomDtails = (bedroomValue>1) ? ("dorms") : ("dorm");
    const parkingDtails = (parkingValue>1) ? ("vagas") : ("vaga");

    const iconArray = [sizeIcon, suiteIcon, bedroomIcon, parkingIcon];
    const valuesArray = [sizeValue, suitesValue, bedroomValue, parkingValue];
    const dtailsArray = ["M²", suitsDtails, bedroomDtails, parkingDtails];

    return(
        <div className="attributes-details">
            {
                iconArray.map((icon, index) =>{
                    if(valuesArray[index]){
                        return(<Attribute icon={iconArray[index]} value={valuesArray[index]} dtails={dtailsArray[index]}/>);
                    }
                })
            }   
        </div>
    )
}

/*

            <Attribute icon={sizeIcon} value={sizeValue} dtails={"M²"}/>
            <Attribute icon={suiteIcon} value={suitesValue} dtails={suitsDtails}/>
            <Attribute icon={bedroomIcon} value={bedroomValue} dtails={bedroomDtails}/>
            <Attribute icon={parkingIcon} value={parkingValue} dtails={parkingDtails}/>
*/