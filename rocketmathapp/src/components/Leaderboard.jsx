import React, { useState, useEffect} from 'react';
import Axios from 'axios';


const Leaderboard = (props) => {

    const [playerData, setPlayerData] = useState([])
    const [rankImages, setRankImages] = useState([

        'images/1place.png',
        'images/2place.png',
        'images/3place.png'
    ])


    //must get the levels of all users in the database
    useEffect(() => {

        Axios.get('http://localhost:3001/players')
            .then(response => {
                setPlayerData(response.data)
                console.log(playerData)
            }).catch( error => {
                console.log(error)
            })
    }, [])

  return (
    <div className='leaderboard-container'>
        
        {playerData.map( (player, index) => {
    
            const rankImage = rankImages[index];

            return (
                <div className='leaderboard-entry' key={index}>
                    <ul>
                        <li>
                            <img src={rankImage} alt='' />
                        </li>
                        <li>
                            <h3>{player.userName}</h3>
                        </li>

                        <li>
                            <img className='lvl-icon' src="images/level.png" alt="" />
                        </li>

                        <li>
                            <h3 className='lvl-text'>{player.level}</h3>
                        </li>
                    </ul>
                    
                        
                </div>
            );

        })}
    </div>
  )
}

export default Leaderboard