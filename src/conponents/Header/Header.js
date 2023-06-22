import React, {useState} from 'react';
import './Header.css'

const Header = ({setActive, setLang, setClick, click}) => {


    const onclick = () =>{
        window.document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
        if (click){
            setClick(false)
        } else
            setClick(true)
    }

    return (
        <header>
            <img className="menu" src="https://i.pinimg.com/originals/dc/98/64/dc9864dccce8838da80c8e1a6b3ab555.png" alt="" onClick={()=> setActive(true)}/>
            <img className="logoTitle" src="https://i.pinimg.com/originals/88/e8/1e/88e81e74b7311db662afe17b1ce1a702.jpg" alt="" onClick={()=> onclick()}/>
            <img className="miniLogo" src="https://i.pinimg.com/originals/74/3b/77/743b77c86935b76cdbd2856c71c351fa.jpg" alt=""/>
            <img className="logoHeart" src="https://i.pinimg.com/originals/a9/f9/41/a9f941e118264fbb8f983ad976d6ebd5.png" alt=""/>
            <img className="logoUser" src="https://i.pinimg.com/originals/63/4e/48/634e480ac7b07af556d0d1ee4b5a3a4f.png" alt=""/>
            <img className="logoCart" src="https://i.pinimg.com/originals/b5/37/91/b53791d95a662d981853632af2fac6db.jpg" alt=""/>
        </header>
    );
};

export default Header;