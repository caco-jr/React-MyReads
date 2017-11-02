import React from 'react';
import { Link } from 'react-router-dom'
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
                            <Link to={{ hash: `#${section.flag}` }} onClick={e => document.getElementById(section.flag).scrollIntoView({ behavior: "smooth" })}>
                                {section.shelf}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Sticky>
    )
}

export default NavLinks;