import * as React from 'react';
import { Card, CardImg } from 'reactstrap';
import strewnCross from '../images/strewnCross.jpg';
import easterVigil from '../images/EasterVigil.jpg';

export const eventsEasterPath = '/events-easter';

export const EventsEaster: React.FC = (_props) => {
    var eventStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Christmas',
        startDate: `2022-04-14T18:30`,
        endDate: `2022-04-19T10:00`,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
            '@type': 'Place',
            name: 'Convent of Poor Clares ',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Crossbush, Arundel',
                postalCode: 'BN18 9PJ',
                streetAddress: 'Convent of Poor Clares',
            },
        },
        image: [easterVigil, strewnCross],
        description: `Maundy Thursday - 6.30pm: Mass of the Lord’s Supper.
Good Friday - 3pm: Liturgy of the Passion, 5:30pm: Way of the Cross.
Holy Saturday - 8:30pm: Easter Vigil.
Easter Sunday - 8:30am: Easter Morning Mass.`,
        organizer: {
            '@type': 'CatholicChurch',
            name: 'Convent of Poor Clares',
            url: 'https://www.poorclaresarundel.org/',
        },
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(eventStructuredData)}</script>
            <h3>The Easter Triduum</h3>

            <h4>Maundy Thursday</h4>

            <p>Mass of the Lord’s Supper: 6.30pm</p>

            <Card className="float-right">
                <CardImg top src={strewnCross} />
            </Card>

            <h4>Good Friday</h4>

            <p>Liturgy of the Passion: 3pm</p>
            <p>Way of the Cross: 5.30pm</p>

            <Card className="float-right">
                <CardImg top src={easterVigil} />
            </Card>

            <h6>Holy Saturday</h6>

            <p>Easter Vigil: 8.30pm</p>

            <h6>Easter Sunday</h6>

            <p>Easter Morning Mass: 8.30am</p>
        </>
    );
};
