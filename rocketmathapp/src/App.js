import React, {useState, useEffect, useRef} from 'react';
import { Ranked,Playlist, Navbar, Sidebar, Dashboard, Signup, LoginNavbar, HowToPlay, Shop, GameModes, } from './components/components';




function App(props) {

  const [showSignup, setShowSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [howToPlay, setHowToPlay] = useState(false);
  const [shop, setShop] = useState(false);
  const [gameModes, setGameModes] = useState(false);
  const [homepage, setHomePage] = useState(true);
  const [practice, setPractie] = useState(false);
  const [casual, setCasual] = useState(false);
  const [ranked, setRanked] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");

  const [activeSidebarIndex, setActiveSidebarIndex] = useState(1);

  function signInButton () {
    setShowSignup(true);
  }

  function goBack () {
    setShowSignup(false);
  }

  const goBackGame = () => {
    setActiveSidebarIndex(1);
    setHomePage(true);
    setGameModes(false);

  }

  const handleRegisterSuccess = (email, userName) => {
    if(email.includes('@gmail.com')){
      setUserEmail(email);
      setUsername(userName);
      setLogin(!login);
      setShowSignup(!showSignup);
    }else {
      alert("Please Enter a Valid Google Email Address");
    }
  }

  const handleLoginSuccess = (userName) => {
    setUsername(userName);
    console.log("Login Success")
    setLogin(!login);

    setShowSignup(!showSignup);
    setHomePage(true);
  }

  const handleHowToPlay = () => {
    
    setHowToPlay(true);
    setHomePage(false);
  }

  const handleShop = () => {
    setActiveSidebarIndex(3)
    setHomePage(false);
    setHowToPlay(false);
    setShop(true);
  }

  const handleGameModes = () => {
    setActiveSidebarIndex(2);
    setHomePage(false);
    setGameModes(true);
  }

  const handlePracticeBack = () => {
    setPractie(false);
    setHomePage(true);
  }

  const handleCasualBack = () => {
    setCasual(false);
    setHomePage(true);
    
  }
  
  const handleSidebarClick = (index) => {
    
    
    if(index === 1) {
      
      if(!homepage) {
        setGameModes(false);
        setShop(false);
        setShowSignup(false);
        setHowToPlay(false);
        setHomePage(true);
        setActiveSidebarIndex(1);
        setCasual(false);
        setRanked(false);
      }
      
    }else if(index === 2){

      if(!gameModes){
        setGameModes(true);
        setHomePage(false);
        setShop(false);
        setActiveSidebarIndex(2);
        setPractie(false);
        setHowToPlay(false);
        setCasual(false);
        setRanked(false);
      }
      
    }else if(index === 3) {

      if(!shop) {
        setGameModes(false);
        setHomePage(false);
        setShop(true)
        setActiveSidebarIndex(3)
        setPractie(false);
        setCasual(false);
        setRanked(false);
      }
      
    }else if(index === 4) {

      setActiveSidebarIndex(4)
    }else if(index === 5) {
      setActiveSidebarIndex(5)
    }else if(index === 6) {
      setActiveSidebarIndex(6)
    }
  }

  const handlePracticeClick = () => {
    setGameModes(false);
    setPractie(true);
    setCasual(false);
    setRanked(false);
  }

  const handleCasualClick = () => {
    setPractie(false);
    setCasual(true);
    setGameModes(false);
    setRanked(false);
    setHomePage(false);
    setShop(false);
    setHowToPlay(false);
    setActiveSidebarIndex(2);
  }

  const handleRankedClick = () => {
    setGameModes(false);
    setRanked(true);
    setCasual(false);
    setPractie(false);
    setHomePage(false);
  }

  
  return (
    <div>
      { homepage && !showSignup && !login &&(
        <div>
          <Navbar onButtonThreeClick={signInButton} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick} />
          <Sidebar username={props.username} handleClick = {handleSidebarClick} activeIndex={activeSidebarIndex}/>
          <Dashboard handleHowToPlay = {handleHowToPlay} handleShop={handleShop} handleGameModes={handleGameModes}/>
        </div>
      )}

      {homepage && !showSignup && login &&  (
        <div>
          
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick} />
          <LoginNavbar username={username} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick}/>
          <Dashboard handleHowToPlay = {handleHowToPlay} handleShop={handleShop} handleGameModes={handleGameModes}/>
          

        </div>
      )}

      {showSignup && !howToPlay && !shop && !gameModes &&<Signup  handleBack={goBack} handleRegisterSuccess={handleRegisterSuccess} handleLoginSuccess={handleLoginSuccess} email={props.email}/>}
     
      { !homepage && !showSignup && howToPlay && (
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick}/>
          <HowToPlay username={username}/>
        </div>
        
      )

      }

      {!homepage && !showSignup && !howToPlay && shop && (
        
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick}/>
          <Shop />
        </div>
        
      )}

      { !homepage && !showSignup && gameModes && (

        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username}  handleClick = {handleSidebarClick}/>
          <GameModes 
          handleBack = {goBackGame} 
          handlePractice = {handlePracticeClick}
          handleCasual = {handleCasualClick}
          handleRanked = {handleRankedClick}
          />

        </div>
      )
      
      }


      {!homepage && !showSignup && (practice || casual || ranked) && !login && (
        <div>
          <h1>Please sign in (must code this)</h1>
        </div>
      )}

      {!homepage && !showSignup && practice && login && (
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username}  handleClick = {handleSidebarClick}/>
          <LoginNavbar username={username} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick}/>
          <Playlist 
          practice={true}
          casual={false}
          ranked={false}
          username={username}
          />
        </div>
      )}

      {!homepage && !showSignup && casual && login && (
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username}  handleClick = {handleSidebarClick}/>
          <LoginNavbar username={username} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick}/>
          <Playlist 
          casual={true}
          practice={false}
          ranked={false}
          username={username}
          />
        </div>
      )}

      {!homepage && !showSignup && ranked && login && (
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username}  handleClick = {handleSidebarClick}/>
          <LoginNavbar username={username} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick}/>
          <Playlist 
          casual={false}
          practice={false}
          ranked={true}
          username={username}
          />
        </div>
      )}

      


      
    </div>

    

  )
}

export default App;