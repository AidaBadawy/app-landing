import React from 'react';
import FeatureBox from './FeatureBox';
import Featureimage from '../images/feature_1.png';
import Featureimage2 from '../images/feature_2.png';
import Featureimage3 from '../images/feature_3.png';


function Feature() {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={Featureimage} title='Development Course' />
                <FeatureBox image={Featureimage2} title='Money Saving services' />
                <FeatureBox image={Featureimage3} title='Usability Interface' />
            </div>


        </div>
    )
}

export default Feature