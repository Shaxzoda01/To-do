import React from 'react'
// import { NavLink } from 'react-router-dom';
import { VscMenu, VscCalendar } from 'react-icons/vsc';
import { BsStar, BsSun } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {MdOutlineAttachFile} from 'react-icons/md';
import {ImCheckmark2} from 'react-icons/im';
import './Sidebar.css'

const MENU_LIST = [
    {
      title: 'My Day',
      path: '/my-day',
      icon: <BsSun />
    },
    
    {
      title: 'Important',
      path: '/important',
      icon: <BsStar />
    },
    
    {
      title: 'Planned',
      path: '/planned',
      icon: <VscCalendar />
    },
    
    {
      title: 'Assigned to me',
      path: '/assigned-to-me',
      icon: <AiOutlineUser />
    },
    
    {
      title: 'Tasks',
      path: '/tasks',
      icon: <IoHomeOutline />
    },
]
const FOOTER_MENU_LIST = [
   {
      title: 'My Day',
      path: '#/my-day',
      icon: <AiOutlineMail />
    },
    {
      title: 'Important',
      path: '#/important',
      icon: <VscCalendar />
    },
    {
      title: 'Planned',
      path: '#/planned',
      icon: <FiUsers />
    },
    {
      title: 'Assigned to me',
      path: '#/assigned-to-me',
      icon: <MdOutlineAttachFile />
    },
    {
      title: 'Tasks',
      path: '#/tasks',
      icon: <ImCheckmark2 />
    },
  ]

function Sidebar() {
    return (
        <div className='Sidebar'>
            <div id='menuIcon'>
                <button><VscMenu /></button>
            </div>
        <div className='menu-list'>
            {
            MENU_LIST.map(item => {
                return (
                <div to={item.path} className="menu-list-item" key={item.title}>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                )
            })
            }
        </div>
        <div className='menu-list footer-menu'>
        {
            FOOTER_MENU_LIST.map(item => {
                return (
                <div to={item.path} className="menu-list-item" key={item.title}>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                )
            })
        }
      </div>
    </div>
    )
}

export default Sidebar;
