import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import lightForTheWorldSmall from '../images/light-for-the-world-small.jpg';

export const lightForTheWorldPath = '/light-for-the-world';

export const LightForTheWorld: React.FC = _props => (
    <>
        <Card className="float-right">
            <CardImg top src={lightForTheWorldSmall} />
        </Card>

        <h3>Light for the World</h3>

        <p>
            Here is our new album, 'Light for the World' . Enjoy listening to our music. We hope it will help you find a place of peace and inner calm.
        </p>

        <p>        
            <a href="https://PCOA.lnk.to/LightForTheWorldSo">Buy our beautiful music here.</a>
        </p>

        {/* <p>
            We will be able to sell our CD from 4th of November. 
            We are selling the CD for £10 plus postage and packaging.  
            Contact us at <a href="mailto:arundel.poorclares@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> arundel.poorclares@gmail.com
            </a> for more details.
        </p> */}

        <p>
            <a href="https://www.youtube.com/watch?v=zs5rGW-RE38">
                <FontAwesomeIcon icon={faYoutube} />{' '}
                The video on YouTube
            </a>
        </p>

    </>
);
