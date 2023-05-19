import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LinLogo from "./Assests/Linkedin-Logo.png"
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
                <img src={LinLogo} alt='' />

                <div className='header_search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className='header_right'>
                <HeaderOption title="Home" />
                <HeaderOption />
            </div>
        </div>
    )
}

export default Header