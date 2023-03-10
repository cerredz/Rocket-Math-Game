import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const LoginNavbar = (props) => {

  const username = props.username;
  const [currentUser, setCurrentUser] = useState({});
  const [levelProgression, setLevelProgression] = useState(0.0);
  const [rankImage, setRankImage] = useState("");



  useEffect(() => {
    Axios.get(`http://localhost:3001/users/${username}`)
      .then((response) =>  {
        setCurrentUser(response.data);
        
        const nextLevel = ((response.data.level + 1.0) * 20.0 + 10);
        const levelProgress =  (parseFloat(response.data.experience) / nextLevel);
        setLevelProgression(levelProgress);
        setRankImage(`images/${currentUser.rank}.png`);

  })
      .catch((error) => console.log(error));
  }, [username, currentUser])


  return (
    <div className='navbar-container' style={{maxWidth: `900px`}}>
        <div className='nav-item '>
          <button className='button-1' onClick={props.handleCasualClick} >Casual</button>
        </div>
        <div className='nav-item '>
          <button className='button-2' onClick={props.handleRankedClick}>Ranked</button>
        </div>
        <div className='nav-item '>
          <img src="images/shop-icon.png" alt="" />
          <p>{currentUser.coins}</p>
        </div>
        <div className='nav-item '>
          <span style={{position: `relative`}}>
            <span style={{
              position: `absolute`,
              content:'',
              height: `100%`,
              width: `${levelProgression * 100}%`,
              background:`linear-gradient(to right, rgb(153, 15, 233), rgb(220, 9, 228)`,
              top:`0`,
              left:`0`,
              transform: `skewX(-30deg)`

            }}>

            </span>
          </span>
          <p 
          style={{borderRadius: `50%`, border: `1px solid rgb(220,9,228)`, padding: `5px 10px`}} 
          className='level'>{currentUser.level}</p>
          <img className='rank-image' src={rankImage} alt="" />
        </div>
    </div>
  )
}

export default LoginNavbar;