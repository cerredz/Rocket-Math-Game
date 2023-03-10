import React, {useState} from 'react';
import Game from './Game';


const Practice = (props) => {

  const startingContainerStyle = { 
    background: `rgba(255,255,255,.05)`,
    padding: `30px`,
    borderRadius: `30px`,
    boxShadow: `0 0 2em rgba(255,255,255,.05)`,
    
  }

  const [containerStyle, setContainerStyle] = useState(startingContainerStyle);
  const [titleStyle, setTitleStyle] = useState({});
  

  

  const handleCorrectAnswer = () => {

    const audio = new Audio('images/correctSoundEffect.mp3');
    audio.volume = .5;
    audio.play();
    setContainerStyle( {
      background: `rgba(255,255,255,.1)`,
      padding: `30px`,
      borderRadius: `30px`,
      boxShadow: `0 0 2em .5em #38E54D`,
      transition: `.2s ease-in-out`,
      
    })

    setTitleStyle( {
      color: `#38E54D`,
      transition: `.2s ease-in-out`
    })

    setTimeout(() => {

      setContainerStyle({ 
        background: `rgba(255,255,255,.1)`,
        padding: `30px`,
        borderRadius: `30px`,
        boxShadow: `0 0 1em rgba(255,255,255,.1)`,
        transition: `.2s ease-in-out`
      })

      setTitleStyle({
        color: `white`,
        transition: `.2s ease-in-out`
      })
    }, 400)
  }

  const handleWrongAnswer = () => {
    
    const audio = new Audio('images/wrongSoundEffect.mp3');
    audio.volume = .1;
    audio.play();
    setContainerStyle( {
      background: `rgba(255,255,255,.1)`,
      padding: `30px`,
      borderRadius: `30px`,
      boxShadow: `0 0 2em .5em #DC0000`,
      transition: `.2s ease-in-out`,
      
    })

    setTitleStyle( {
      color: `#DC0000`,
      transition: `.2s ease-in-out`
    })

    setTimeout(() => {

      setContainerStyle({ 
        background: `rgba(255,255,255,.1)`,
        padding: `30px`,
        borderRadius: `30px`,
        boxShadow: `0 0 1em rgba(255,255,255,.1)`,
        transition: `.2s ease-in-out`
      })

      setTitleStyle({
        color: `white`,
        transition: `.2s ease-in-out`
      })
    }, 400)

  }

  return (
    
      
      <div  className='practice-container'>
        <div style={containerStyle} className='practice-info'>
          <h1 style={titleStyle} >Practice</h1>
          <Game showNumbers={false} color="rgb(27, 218, 231)" 
          handleCorrectAnswer = {handleCorrectAnswer}
          handleWrongAnswer = {handleWrongAnswer}
          />
          <div className='return-button-container'> 
            <button onClick={() => props.handleBack()} className='return-button'>Return to Homepage</button>
          </div>
        </div>
        
      </div>
      



    

    
  )
}

export default Practice;