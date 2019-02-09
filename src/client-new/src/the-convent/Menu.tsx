import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import lifeInAConvent from '../static/Stylist_Life_in_a_convent.pdf';
// import communityFoundationsHollington from '../static/communityFoundationsHollington.pdf';
// import tripAroundGuestHouse from '../static/tripAroundGuestHouse.pdf';
// import communityTripAroundHouse from '../static/communityTripAroundHouse.pdf';
import './Menu.css';
// import { ourPrayerPath } from './our-life/OurPrayer';
// import { ourShopPath } from './our-life/OurShop';
// import { ourWorkPath } from './our-life/OurWork';
// import { sisterAnnPath } from './community/SisterAnn';
// import { sisterClareAgnesPath } from './community/SisterClareAgnes';
// import { sisterClareRuvaPath } from './community/SisterClareRuva';
// import { sisterGabrielPath } from './community/SisterGabriel';
// import { sisterGracaPath } from './community/SisterGraca';
// import { sisterJosephPath } from './community/SisterJoseph';
// import { sisterMariaPath } from './community/SisterMaria';
// import { interviewsPath } from './community/Interviews';
// import { arundelPath } from './community/Arundel';
// import { claresStoryPath } from './beginnings/ClaresStory';
// import { claresThoughtsPath } from './beginnings/ClaresThoughts';
// import { claresPrayersPath } from './beginnings/ClaresPrayers';
// import { francisLifePath } from './beginnings/FrancisLife';
// import { francisThoughtsPath } from './beginnings/FrancisThoughts';
// import { francisPrayersPath } from './beginnings/FrancisPrayers';
// import { faqsPath } from './misc/FAQs';
// import { linksPath } from './misc/Links';
// import { glossaryPath } from './misc/Glossary';
// import { addressesPath } from './misc/Addresses';
// import { vocationPath } from './community/Vocation';
// import { kenyaPath } from './community/Kenya';
// import { prayerRequestsPath } from './PrayerRequests';
// import { theConventPath } from '../the-convent';
import { whyPath } from './Why';
import { usPath } from 'src/main/Us';
import { angelaPath } from './seekers/Angela';

interface IProps {
    conventRootPath: string;
}

const initialState = {
    isOpen: false
};

export class Menu extends React.Component<IProps, typeof initialState> {
    state = initialState;

    toggle = () =>
        this.setState(() => ({
            isOpen: !this.state.isOpen
        }));

    render() {
        const { conventRootPath } = this.props;
        return (
            <>
                <div className="header-image header-image-the-convent" />

                <Navbar dark className="bg-primary" expand="md">
                    <Container>
                        <Link to={conventRootPath} className="navbar-brand">The Convent</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to={`${conventRootPath}${whyPath}`}>
                                        Why
                                    </Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Seekers
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${angelaPath}`}>Angela</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${angelaPath}`}>Debi</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${angelaPath}`}>Iona</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={`${conventRootPath}${angelaPath}`}>Vik</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                {/* <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Community
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Sister's stories</DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterAnnPath}>Sister Ann</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterClareAgnesPath}>Sister Clare Agnes</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterClareRuvaPath}>Sister Clare Ruva</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterGabrielPath}>Sister Gabriel</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterGracaPath}>Sister Graça</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterJosephPath}>Sister Joseph</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={sisterMariaPath}>Sister Maria</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={interviewsPath}>Interviews with Sisters</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to={arundelPath}>Arundel Community</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={vocationPath}>Vocation</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem header>Foundations</DropdownItem>
                                        <DropdownItem>
                                            <Link to={kenyaPath}>Kenya</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <a href={communityFoundationsHollington}>Hollington</a>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Beginnings
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={claresStoryPath}>Clares Story</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={claresThoughtsPath}>Clares Thoughts</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={claresPrayersPath}>Clares Prayers</Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to={francisLifePath}>Francis Life</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={francisThoughtsPath}>Francis Thoughts</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={francisPrayersPath}>Francis Prayers</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Misc
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to={faqsPath}>FAQs</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={linksPath}>Links</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={glossaryPath}>Glossary</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to={addressesPath}>Addresses</Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <Link className="nav-link" to={prayerRequestsPath}>
                                        Prayer Requests
                                    </Link>
                                </NavItem> */}
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/">
                                        Back to main site
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
