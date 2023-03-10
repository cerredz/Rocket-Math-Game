import React from 'react'
import GameModeCard from './GameModeCard';

const GameModes = (props) => {
  return (
    <div className='game-mode-container'>
        <h2 className='title'>Game Modes</h2>
        <div className='game-mode-info'>
          <GameModeCard title="Practice"
           image="images/practice.png"
           color="rgb(27, 218, 231)"
           description="You cant climb the ranks without practicing. Hop in a training session and feel free to do as many practice problems as you need. Problems completed in this game mode do not count toward you rank or level."
           handleClick={props.handlePractice}
           />
          <GameModeCard 
          title="Casual" 
          image="images/casual.png"
          color="rgb(168, 38, 243)"
          description="Math made fun! Enjoy a laid-back, relaxed, and fun experience completing basic math problems. Problems completed in this gamemode will count toward your level, coin balance, but not your rank."
          handleClick={props.handleCasual}
          />
          <GameModeCard 
          title="Ranked" 
          image="images/ranked.png"
          color="rgb(220, 9, 228)"
          description="Put your skills to the test, prove your math mastery, and climbs the ranks in the competitive and high-intensity ranked gamemode. Do you have what it takes to become a math grandmaster?"
          handleClick ={props.handleRanked}
          />
        </div>
        <div className='return-button-container'> 
          <button style={{marginTop: `25px`, position: `relative`}} onClick={() => props.handleBack()} className='return-button'>Return to Homepage</button>
        </div>
    </div>
  )
}

export default GameModes;