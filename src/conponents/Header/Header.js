import React from 'react';
import './Header.css'

const Header = ({setActive, setLang}) => {

    return (
        <header>
            <img className="menu" src="https://i.pinimg.com/originals/ee/7d/ec/ee7decc1f8bd6182bf9e990b2b1707af.png" alt="" onClick={()=> setActive(true)}/>
            <div className="header">
                <img src="https://i.pinimg.com/originals/9d/73/9b/9d739b9c132c9946ec72988d1bf56194.jpg" alt=""/>
                <h1>Art</h1>
                <h1>Emporium</h1>
            </div>
            <select onChange={(e)=>setLang(e.target.value)}>
                <option value="EN">EN</option>
                <option value="FR">FR</option>
            </select>
        </header>
    );
};

export default Header;