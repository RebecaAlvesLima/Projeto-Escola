import './Logo.css';
import React from 'react';
import cotuca from '../../assets/cotuca.png'

export default function Logo(props){
    return(
        <aside className="logo">
            <a href='/' className='logo'>
                <img className= "img" src={cotuca} alt="Logo"/>
            </a>
        </aside>
    )
}