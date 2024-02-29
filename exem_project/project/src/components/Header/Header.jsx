import './Header.scss';
import logo from '../../assets/logo-svgrepo-com.svg';
import React from 'react';

const Header = React.memo(function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <p><strong>Вопросы для собеседования.</strong></p>
        </div>
    );
});

export default Header;