import React from 'react';
import './running.css'

const RunningText = ({lang}) => {
    return (
        <div className="newRun">
            {/*<div className="b-marquee b-marquee--rtl">*/}
            {/*    <div className="b-marquee__text">En raison du grand nombre de personnes souhaitant acheter les articles*/}
            {/*        promotionnels, nous avons introduit une restriction : 1 article par personne.*/}
            {/*    </div>*/}
            {/*</div>*/}
            <p><span>IMPORTANT: </span>Due to the large number of people wishing to purchase promotional items, we have
                introduced a restriction: 1 item per person.</p>
        </div>
    );
};

export default RunningText;