import React, {useState, useEffect, useRef} from 'react';
import { Leaderboard , Error, FAQ, Contact, Ranked, Playlist, Navbar, Sidebar, Dashboard, Signup, LoginNavbar, HowToPlay, Shop, GameModes, } from './components/components';




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
  const [contact, setContact] = useState(false);
  const [faq, setFaq] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("retto");

  const [activeSidebarIndex, setActiveSidebarIndex] = useState(1);

  function signInButton () {
    setShowSignup(true);
  }

  function goBack () {
    setShowSignup(false); 
    setHomePage(true);
    setActiveSidebarIndex(1);

  }

  const goBackGame = () => {
    setActiveSidebarIndex(1);
    setHomePage(true);
    setGameModes(false);

  }

  const goBackContact = () => {
    setActiveSidebarIndex(1);
    setHomePage(true);
    setContact(false);
  }




  const handleRegisterSuccess = (email, userName) => {
    if(email.includes('@gmail.com')){
      setUserEmail(email);
      setUsername(userName);
      setLogin(true);
      setShowSignup(false);
      setHomePage(true);
      setGameModes(false);
      setCasual(false);
      setRanked(false);
      setFaq(false);
      setContact(false);
      setShop(false);
      setLeaderboard(false);
      setActiveSidebarIndex(1);

    }else {
      alert("Please Enter a Valid Google Email Address");
    }
  }

  const handleLoginSuccess = (userName) => {
    setUsername(userName);
    console.log("Login Success")
    setLogin(true);

    setShowSignup(false);
    setHomePage(true);
    setGameModes(false);
    setCasual(false);
    setRanked(false);
    setFaq(false);
    setContact(false);
    setShop(false);
    setLeaderboard(false);
    setActiveSidebarIndex(1);
  }

  const handleHowToPlay = () => {
    
    setFaq(true);
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
        setHomePage(true);
        setGameModes(false);
        setShop(false);
        setShowSignup(false);
        setHowToPlay(false);
        setActiveSidebarIndex(1);
        setCasual(false);
        setRanked(false);
        setLeaderboard(false);
        setFaq(false);
        setContact(false);
        setPractie(false);
      }
      
    }else if(index === 2){

      if(!gameModes){
        setGameModes(true);
        setActiveSidebarIndex(2);
        setHomePage(false);
        setShop(false);
        setShowSignup(false);
        setHowToPlay(false);
        setCasual(false);
        setRanked(false);
        setLeaderboard(false);
        setFaq(false);
        setContact(false);
        setPractie(false);
      }
      
    }else if(index === 3) {

      if(!shop) {
        setShop(true);
        setActiveSidebarIndex(3);
        setGameModes(false);
        setHomePage(false);
        setShowSignup(false);
        setHowToPlay(false);
        setCasual(false);
        setRanked(false);
        setLeaderboard(false);
        setFaq(false);
        setContact(false);
        setPractie(false);
      }
      
    }else if(index === 4) {

      if(!leaderboard) {
        setLeaderboard(true);
        setActiveSidebarIndex(4);
        setShop(false);
        setGameModes(false);
        setHomePage(false);
        setShowSignup(false);
        setHowToPlay(false);
        setCasual(false);
        setRanked(false);
        setFaq(false);
        setContact(false);
        setPractie(false);
      }

    }else if(index === 5) {

      if(!faq) {
        setFaq(true);
        setActiveSidebarIndex(5);
        setLeaderboard(false);
        setShop(false);
        setGameModes(false);
        setHomePage(false);
        setShowSignup(false);
        setHowToPlay(false);
        setCasual(false);
        setRanked(false);
        setContact(false);
        setPractie(false);
      }

    }else if(index === 6) {
      
      if(!contact) {
        setContact(true);
        setActiveSidebarIndex(6);
        setFaq(false);
        setLeaderboard(false);
        setShop(false);
        setGameModes(false);
        setHomePage(false);
        setShowSignup(false);
        setHowToPlay(false);
        setCasual(false);
        setRanked(false);
        setPractie(false);
      }
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
    setContact(false);
    setFaq(false);
    setLeaderboard(false);
  }

  const handleRankedClick = () => {
    setPractie(false);
    setCasual(false);
    setGameModes(false);
    setRanked(true);
    setHomePage(false);
    setShop(false);
    setHowToPlay(false);
    setActiveSidebarIndex(2);
    setContact(false);
    setFaq(false);
    setLeaderboard(false);
  }

  const handleLoginClick = () => {

    setShowSignup(true);
    setGameModes(false);
    setPractie(false);
    setCasual(false);
    setRanked(false);
    setShop(false);
    setLeaderboard(false);
    setFaq(false);
    setContact(false);
  }

  const handlePracticeReviewRules = () => {
    setPractie(false);
    setFaq(true);
    setActiveSidebarIndex(5)
  }

  const handleCasualReviewRules = () => {
    setCasual(false);
    setFaq(true);
    setActiveSidebarIndex(5);
  }

  const handleRankedReviewRules = () => {
    setRanked(false);
    setFaq(true);
    setActiveSidebarIndex(5);
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

      {showSignup  &&<Signup  handleBack={goBack} handleRegisterSuccess={handleRegisterSuccess} handleLoginSuccess={handleLoginSuccess} email={props.email}/>}
     
      { !homepage && !showSignup && howToPlay && (
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick}/>
          <HowToPlay username={username}/>
        </div>
        
      )

      }

      {!homepage && !showSignup && !howToPlay && shop && login &&(
        
        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick}/>
          <LoginNavbar username={username} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick}/>

          <Shop />
        </div>
        
      )}

      { !homepage && !showSignup && gameModes && login &&(

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


      {!homepage && !showSignup && ( gameModes || practice || casual || ranked || shop || leaderboard || faq || contact) && !login && (
        <div>
          <Error 
          loginClick={handleLoginClick} 
          handleRegisterSuccess={handleRegisterSuccess}/>
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
          handlePracticeReviewRules={handlePracticeReviewRules}
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
          casualReviewRulesClick={handleCasualReviewRules}
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
          rankedReviewRulesClick = {handleRankedReviewRules}
          
          />
        </div>
      )}

      {!homepage && !showSignup && contact && login && (

        <div>
        
          <Contact handleBack={goBackContact}/>
        </div>
      )}

      {!homepage && !showSignup && faq && login && (

        <div>
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick} />
          <FAQ />
        </div>
      )

      }

      {!homepage && !showSignup && leaderboard && login && (
        <div>
          <LoginNavbar username={username} handleCasualClick={handleCasualClick} handleRankedClick={handleRankedClick}/>
          <Sidebar activeIndex={activeSidebarIndex} username={username} handleClick = {handleSidebarClick} />
          <Leaderboard />
          
        </div>
      )}

      


      
    </div>

    

  )
}

export default App;