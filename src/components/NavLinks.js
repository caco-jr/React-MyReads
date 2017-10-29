import React from 'react';
import Scrollchor from 'react-scrollchor';
import { SHELVES } from '../utils/shelves'

const NavLinks = (props) => {
    return (
        <nav className="section__links">
            <ul>
                {
                    SHELVES.map(section => (
                        <li key={section.flag}>
                            <Scrollchor to={section.flag}>
                                {section.shelf}
                            </Scrollchor>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default NavLinks;