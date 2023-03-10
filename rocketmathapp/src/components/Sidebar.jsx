import React, { useState } from 'react';


const Sidebar = (props) => {

    const [arrowClosed, setArrowClosed] = useState(false);
    
    function dashboardClose() {

        const arrow = document.querySelector(".arrow");
        const sidebar = document.querySelector(".sidebar-container");

        setArrowClosed(!arrowClosed);
        console.log(arrowClosed);

        if(arrowClosed === true ){
            arrow.classList.add("rotate");
            sidebar.classList.add("closed");
        }else {
            arrow.classList.remove("rotate");
            sidebar.classList.remove("closed");
        }
    }

    return (
        <div className='sidebar-container'>
            <div className='profile-info'>
                <div className='profile-picture'>
                    <img src="images/profile-picture.png" alt="" />
                </div>
                <h3 className='username' >{props.username}</h3>
                <img src="images/arrow.png" alt="" className='arrow' onClick={dashboardClose}/>

            </div>
            
            <div className='sidebar-info'>
                <ul>
                    <li  
                    id='1' 
                    className={`sidebar-item ${props.activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => props.handleClick(1)}>
                        <img src="images/dashboard.png" alt="" />
                        <span>Dashboard</span>
                        <span className='dummy'></span>
                    </li>
                    <li 
                    id='2' 
                    className={`sidebar-item ${props.activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => props.handleClick(2)}>
                        <img src="images/training.png" alt="" />
                        <span>Game Modes</span>
                    </li>
                    <li 
                    id='3' 
                    className={`sidebar-item ${props.activeIndex === 3 ? 'active' : ''}`}
                    onClick={() => props.handleClick(3)}>
                        <img src="images/shop.png" alt="" />
                        <span>Shop</span>
                    </li>
                    <li 
                    id='4' 
                    className={`sidebar-item ${props.activeIndex === 4 ? 'active' : ''}`}
                    onClick={() => props.handleClick(4)}>
                        <img src="images/leaderboard.png" alt="" />
                        <span>Leaderboard</span>
                    </li>
                    <li 
                    id='5' 
                    className={`sidebar-item ${props.activeIndex === 5 ? 'active' : ''}`}
                    onClick={() => props.handleClick(5)}>
                        <img src="images/question.png" alt="" />
                        <span>FAQ</span>
                    </li>
                    <li 
                    id='6' 
                    className={`sidebar-item ${props.activeIndex === 6 ? 'active' : ''}`}
                    onClick={() => props.handleClick(6)}>
                        <img src="images/email.png" alt="" />
                        <span>Contact Us</span>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
