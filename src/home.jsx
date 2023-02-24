
import React from 'react';
import './home.css'
import calendar from './images/calendar_new.svg';
import profile from './images/profile.png';
import ellipse from './images/Ellipse.png';
import badge from './images/badge.svg';
import tasks from './images/tasks.svg';
import user from './images/user.svg';
import category from './images/category.svg';
import buildingLine from './images/building-line.svg';
import notification from './images/Notification.svg';

const Home = () => {
    return (
        <>
            <div className='side-bar-top'>
                <img src={ellipse} alt="img" ></img>
            </div>
            <div className='side-bar-container'>
                <div className='side-bar-upper-outer'>
                    <img src={category} alt="img" ></img>
                    <img src={tasks} alt="img"></img>
                    <img src={calendar} alt="img" ></img>
                    <img src={badge} alt="img" ></img>
                    <img src={user} alt="img" ></img>
                    <img src={buildingLine} alt="img"></img>
                </div>
                <div className='side-bar-bottom-outer'>
                    <img src={notification} alt="img" className='icons'></img>
                    <img src={profile} alt="img" className='profile'></img>
                </div>
            </div>
        </>
    );
};


export default Home;
