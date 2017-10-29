import React from 'react';
import Scrollchor from 'react-scrollchor';
import { SHELVES } from '../../utils/shelves'
import './navLinks.css'
import Sticky from '../Sticky'

const NavLinks = (props) => {
    return (
        <Sticky className="sticky__nav section__container">
            <ul className="section__list">
                <li className="section__list--links">
                    <span> Go to section: </span>
                </li>

                {
                    SHELVES.map(section => (
                        <li key={section.flag} className="section__list--links">
                            <Scrollchor to={section.flag}>
                                {section.shelf}
                            </Scrollchor>
                        </li>
                    ))
                }
            </ul>
        </Sticky>
    )
}

export default NavLinks;