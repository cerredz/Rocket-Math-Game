import React, {useState} from 'react'
import Practice from './Practice'
import Casual from './Casual';
import Ranked from './Ranked';

const Playlist = (props) => {

    const [practice, setPractice] = useState(Boolean(props.practice));
    const [casual, setCasual] = useState(Boolean(props.casual));
    const [ranked, setRanked] = useState(Boolean(props.ranked));
    const [username, setUserName] = useState(props.username);

  return (
    <div>
        {practice && (
            <Practice />
        )}
        {casual && (
            <Casual 
            title="CASUAL"
            description="Rocket Math casual mode is a stress-free environment where players can brush up on their arithmetic skills at their own pace."
            username={username}
            color="rgb(12, 188, 219)"
            
            />
        )}
        {ranked && (
          <Ranked 
          title="Ranked"
          description="Rocket Math's ranked mode puts players against the best as they compete for the top ranks and prove who is the Rocket Math Grandmaster"
          username={username}
          color="rgb(220, 9, 228)"
          />
        )}

    </div>
  )
}

export default Playlist