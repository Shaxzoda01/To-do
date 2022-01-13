import React from 'react';
import {CgMenuGridO} from 'react-icons/cg';
// import {VscSearch} from 'react-icons/vsc';
import {IoSettingsOutline} from 'react-icons/io5';
import{BiQuestionMark} from 'react-icons/bi';
import {AiOutlineNotification} from 'react-icons/ai';
import UserImg from './images.jpg'
import './Header.css';

function Header() {
    return (
        <header >
            <div id='header' >
                <div style={{display: "flex"}}>
                    <button>
                        <CgMenuGridO size={25} title='Grid' />
                    </button>
                    <p style={ { fontSize:"19px", margin: "9px"} }>To Do</p>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <input type="search" />
                    {/* <i id="searchIcon"><VscSearch color='#346fef' size={20}/></i> */}
                </div>
                <div style={{display:"flex"}}>
                    <button><IoSettingsOutline  size={20} /></button>
                    <button><BiQuestionMark size={20} /></button>
                    <button className='header-notification'>
                        <span>{0}</span>
                        <AiOutlineNotification size={20} /></button>
                    <button>
                        <img className='userImg' src = {UserImg} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
