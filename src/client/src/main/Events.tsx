import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import stClareStatue from './images/StClareStatue.jpg';
import stFrancis from './images/StFrancis.jpg';
import strewnCross from './images/strewnCross.jpg';
import easterVigil from './images/EasterVigil.jpg';
import crib from './images/crib.jpg';
import taize from './images/Taize.png';

export const eventsPath = '/events';

export const Events: React.SFC = _props => (
    <>
        <h3>Events</h3>

        <h4>Annual Events</h4>
        <p>Come and join us for these events which take place throughout the year!</p>

        <h4>Franciscan Celebrations</h4>

        <Card className="float-right">
            <CardImg top src={stClareStatue} />
        </Card>

        <h5>Solemnity of St Clare</h5>

        <p>Usually we celebrate St Clare on:</p>

        <p>10th August, Transitus with 1st Vespers: 5.30pm. Followed by supper with the community</p>

        <p>11th August: 8.30am Mass of St Clare</p>

        <p>But in 2019, as 11th August falls on a Sunday, we will celebrate St Clare on the Monday.</p>

        <h5>Solemnity of St Clare - 2019</h5>

        <p>11th August: Transitus with 1st Vespers: 5.30pm. Followed by supper with the community</p>

        <p>12th August: 8.30am Mass of St Clare</p>

        <Card className="float-right">
            <CardImg top src={stFrancis} />
        </Card>

        <h5>Solemnity of St. Francis: 4th October</h5>

        <p>3rd Oct – Transitus with 1st Vespers: 5.30pm</p>

        <p>4th Oct – Mass of St. Francis: 8.30am</p>

        <h5>The Easter Triduum</h5>

        <h6>Maundy Thursday</h6>

        <p>Mass of the Lord’s Supper: 6.30pm</p>

        <p>
            In accordance with the Church's ancient tradition, of giving to the poor on Holy Thursday, we invite you to
            bring something from the following list. Gifts will be carried up in the offertory procession and will be
            given to a local food bank afterwards.
        </p>

        <Card className="float-right">
            <CardImg top src={strewnCross} />
        </Card>

        <ul>
            <li>Tinned meat and fish</li>
            <li>pasta sauces</li>
            <li>tea</li>
            <li>coffee</li>
            <li>jam</li>
            <li>packets of soup</li>
            <li>toilet rolls</li>
        </ul>

        <p>Thank you for your generosity.</p>

        <h6>Good Friday</h6>

        <p>Liturgy of the Passion: 3pm</p>
        <p>Way of the Cross: 5.30pm</p>

        <Card className="float-right">
            <CardImg top src={easterVigil} />
        </Card>

        <h6>Holy Saturday</h6>

        <p>Easter Vigil: 8.30pm</p>

        <h6>Easter Sunday</h6>

        <p>Easter Morning Mass: 8.30am</p>

        <h4>Christmas</h4>

        <h5>Christmas Eve</h5>

        <p>1st Vespers: 5.30pm</p>

        <p>Office of Readings and blessing of the Crib: 11.15pm</p>

        <Card className="float-right">
            <CardImg top src={crib} />
        </Card>

        <h5>Christmas Day</h5>

        <p>Christmas Morning Mass: 8.30am</p>

        <p>Please join us for refreshments afterwards</p>

        <Card className="float-left">
            <CardImg top src={taize} />
        </Card>

        <h5>Taize Evening</h5>

        <p>Every last Friday of the month (except December): 7.15 - 8.15</p>
        <p>...round the Cross with Scripture, song and silence</p>

        <h6>Every Sunday</h6>
        <p>Exposition: 4:30pm</p>
        <p>Vespers with Benediction: 5:30pm</p>

        <h6>Every Tuesday</h6>
        <p>John Main Meditation Group: 7:15pm</p>
    </>
);
