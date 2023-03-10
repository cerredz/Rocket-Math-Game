import React, {useState} from 'react';


const GameModeCard = (props) => {

  const startingStyle = {
    borderRadius: `5px`,
    border: `3px solid white`,
    background: `transparent`,
    padding: `10px 20px`,
    color: `white`,
  }

  const startingCardStyle = {
    boxShadow: `none`

  }



  const [buttonStyle, setButtonStyle] = useState(startingStyle);
  const [titleStyle, setTitleStyle] = useState({color: `white`});
  const [cardStyle, setCardStyle] = useState(startingCardStyle);

  const handleButtonEnter = () => {
    setButtonStyle( {
      color: `black`,
      background: `${props.color}`,
      borderRadius: `5px`,
      border: `3px solid ${props.color}`,
      padding: `10px 20px`,
      boxShadow: `0 0 3em .01em ${props.color}`,
      
      
    })
  }

  const handleButtonLeave = () => {
      setButtonStyle(startingStyle)
  }

  const handleCardEnter = () => {
    setButtonStyle( {
      border: `3px solid ${props.color}`,
      padding: `10px 20px`,
      background: `transparent`,
      borderRadius: `5px`,
      color: `${props.color}`,
      

    })

    setTitleStyle( {
      color: `${props.color}`
    })

    setCardStyle({
      boxShadow: `0 0 1em ${props.color}`
    })
  }

  const handleCardLeave = () => {
    setButtonStyle( {
      borderRadius: `5px`,
      border: `3px solid white`,
      background: `transparent`,
      padding: `10px 20px`,
      color: `white`,
    })

    setTitleStyle( {
      color: `white`
    })

    setCardStyle( {
      boxShadow: `none`
    })
  }

  return (

    <div className='game-card-container' 
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleCardLeave}
          style={cardStyle}
          >
        <div className='game-card-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='game-card-info'>
            <h2 style={titleStyle}>{props.title}</h2>
            <p> {props.description} </p>
            <div className='game-card-button'>
              <button style={buttonStyle} 
              onMouseEnter={handleButtonEnter}
              onMouseLeave={handleButtonLeave}
              onClick={props.handleClick}
              > Play Now</button>
              
             
            </div>
        </div>
        <span className='first' style={{borderBottom: `5px solid ${props.color}`, borderBottomLeftRadius: `10px`}}></span>
        <span className='second' style={{borderBottom: `5px solid ${props.color}`, borderBottomRightRadius: `10px`}}></span>
        <span className='third' style={{borderLeft: `5px solid ${props.color}`, borderBottomLeftRadius: `10px`}}></span>
        <span className='fourth' style={{borderLeft: `5px solid ${props.color}`, borderTopLeftRadius: `10px`}}></span>
        <span className='fifth' style={{borderRight: `5px solid ${props.color}`, borderBottomRightRadius: `10px`}}></span>
        <span className='sixth' style={{borderRight: `5px solid ${props.color}`, borderTopRightRadius: `10px`}}></span>
        <span className='seventh' style={{borderTop: `5px solid ${props.color}`, borderTopLeftRadius: `10px`}}></span>
        <span className='eight' style={{borderTop: `5px solid ${props.color}`, borderTopRightRadius: `10px`}}></span>
        
    </div>
  )
}

export default GameModeCard