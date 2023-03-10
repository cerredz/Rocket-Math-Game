import React from 'react'
import {Card} from "./components";


const Dashboard = (props) => {
  return (
    <div className='dashboard-container '>
        <div className='heading-container'>
          <h2>🚀 Welcome to Rocket Math 📏</h2>
        </div>
        
        <div className='dashboard-info'>
            <Card handleClick={props.handleHowToPlay} title="How To Play" image="images/background1.jpg" description="Learn the rules of Rocket Math within minutes" color="rgb(27, 218, 231)" />
            <Card handleClick = {props.handleShop} title="Shop" image="images/background2.jpg" description="View our exclusive and unique items" color="rgb(168, 38, 243)"/>
            <Card handleClick = {props.handleGameModes} title="Game Modes" image="images/background3.jpg" description="Select your preferred game mode" color="rgb(220, 9, 228)"/>
            
        </div>
    </div>
  )
}

export default Dashboard;