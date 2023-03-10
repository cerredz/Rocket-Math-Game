import React, { useState }from 'react'

const Card = (props) => {
  
  
      const startingStyle = {
        backgroundImage: `url(${props.image})`,
        boxShadow: `0 0 .5em ${props.color}`
      }
  
      const [style, setStyle] = useState(startingStyle);
      const [color, setColor] = useState({color: `white`});

      const handleMouseOver = () => {
        setStyle({
          backgroundImage: `url(${props.image})`,
          boxShadow: `0 0 5em ${props.color}`,
          transform: `translateX(3%) translateY(-3%)`,
          

        })

        setColor({
          color: `${props.color}`
        })

      }

      const handleMouseLeave = () => {
        setStyle({
          backgroundImage: `url(${props.image})`,
          boxShadow: `0 0 .5em ${props.color}`
        })

        setColor({
          color: `white`
        })
      }
  
  return (

  
    <div 
      className='card-container' 
      style={style}
      onMouseEnter = {handleMouseOver}
      onMouseLeave =  {handleMouseLeave}
      onClick={props.handleClick}
      >
      
        <div className='card-info'>
            <span style={{
              background: `linear-gradient(90deg, transparent, ${props.color})`, 
            }}></span>
            <span style={{background: `linear-gradient(180deg, transparent, ${props.color})`}}></span>
            <span style={{background: `linear-gradient(270deg, transparent, ${props.color})`}}></span>
            <span style={{background: `linear-gradient(360deg, transparent, ${props.color})`}}></span>
            <h2 style={color}>{props.title}</h2>
            <p>{props.description}</p>

        </div>
        
        
    </div>
  )
}

export default Card;