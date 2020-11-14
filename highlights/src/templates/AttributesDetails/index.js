import React from 'react';
import './styles.css';

import sizeIcon from '../../img/dimensions.svg';
import suiteIcon from '../../img/bathtub.svg';
import bedroomIcon from '../../img/bed.svg';
import parkingIcon from '../../img/sedan.svg';

import Attribute from '../Attribute';

export default function AttributesDetails(){
    const sizeValue = 70;
    const suitesValue = 2;
    const bedroomValue = 3;
    const parkingValue = 1;

    const suitsDtails = (suitesValue>1) ? ("suites") : ("suite");
    const bedroomDtails = (bedroomValue>1) ? ("dorms") : ("dorm");
    const parkingDtails = (parkingValue>1) ? ("vagas") : ("vaga");
    return(
        <div className="attributes-details">
            <Attribute icon={sizeIcon} value={sizeValue} dtails={"M²"}/>
            <Attribute icon={suiteIcon} value={suitesValue} dtails={suitsDtails}/>
            <Attribute icon={bedroomIcon} value={bedroomValue} dtails={bedroomDtails}/>
            <Attribute icon={parkingIcon} value={parkingValue} dtails={parkingDtails}/>
        </div>
    )
}