import './Header.scss';
import logo from '../../assets/logo-svgrepo-com.logo';
import React, { memo } from 'react';

const Header = memo(function Header() {
    return (
        <div className='header'>
            <img src={ logo } alt="" />
            <p><strong>Вопросы для собеседования.</strong></p>
        </div>
    );
});

export default Header;