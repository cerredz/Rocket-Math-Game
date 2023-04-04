import React, {useState} from 'react'
import Axios from 'axios';
const Error = (props) => {

  const [rightBackground, setRightBackground] = useState(true);
  const [spanStyle, setSpanStyle] = useState({})

  //overriding css properties when the sign-in button is clicked for the first time
  const [leftContainerStyle, setLeftContainerStyle] = useState({
    background:`linear-gradient(to bottom, rgb(27, 81, 231), rgb(27, 218, 231))`,
    height: `100%`,
    width: `50%`
    
  })

  const [rightContainerStyle, setRightContainerStyle] = useState({
    background: `transparent`,
    
  })

  const [titleStyle, setTitleStyle] = useState({
    scale: `.57`,
    top: `0`,
  })

  const [rightTitleStyle, setRightTitleStyle] = useState({
    marginTop: `20px`
  })

  const [topSpanStyle, setTopSpanStyle] = useState({})
  const [bottomSpanStyle, setBottomSpanStyle] = useState({})

  //css properties for new items 
  const [topInput, setTopInput] = useState({});
  const [middleInput, setMiddleInput] = useState({});
  const [bottomInput, setBottomInput] = useState({});


  const changeSpanBackground = () => {
    

    setTopSpanStyle({boxShadow: `inset 0 0 3em #0002A1`})
    setBottomSpanStyle({boxShadow: `inset 0 0 3em #0002A1`})
  }

  const resetSpanBackground = () => {
    setBottomSpanStyle({})
    setTopSpanStyle({})
  }
  const handleSignInClick = () => {
    setRightBackground(false);

    setTopSpanStyle({
      boxShadow: `inset 2em rgba(255,255,255,.3)`,
      
    })

    setBottomSpanStyle({
      boxShadow: `inset 2em rgba(255,255,255,.3)`,
      
    })


  }

  //input css hover effects
  const topInputHover = () => {
    setTopInput({borderBottom: `1px solid rgb(0, 247, 255)`})
  }
  const topInputLeave = () => {setTopInput({})}

  const middleInputHover = () => {
    setMiddleInput({borderBottom: `1px solid rgb(0, 247, 255)`})
  }
  const middleInputLeave = () => {setMiddleInput({})}

  const bottomInputHover = () => {
    setBottomInput({borderBottom: `1px solid rgb(0, 247, 255)`})
  }
  const bottomInputLeave = () => {setBottomInput({})}


  const handleLoginClick = () => {
    props.loginClick();
  }

  //variables / functions for signing up

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const updateUsername = (event) => {
    setUsername(event.target.value);
  }

  const updateEmail = (event) => {
    setEmail(event.target.value);
  }

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }


  const addUser = () => {
    Axios.post('http://localhost:3001/login', {
    userName: userName, 
    password: password, 
    email: email
  }).then(() => {
    console.log("Success");
  }).catch((error) => {
    console.log(error);
  });
}
  const handleRegisterClick = (event) => {
    event.preventDefault();
    Axios.get('http://localhost:3001/users').then((response) => {


      let usernameExists = false;
      response.data.forEach((user) => {
        if(userName === user.userName) {
          usernameExists = true;
        } 

        
      });

      if(usernameExists) {
        alert("That Username Is Already Taken, Please Select Another One");

      }else {
          addUser();
          console.log(email)
          props.handleRegisterSuccess(email, userName);
      }

    })
    
  }



  



  return (

    <div>

      {rightBackground && (
        <div className='error-container'>
          
          <div className='error-box'>

              <div className='error-message'>
                  <h1 className='error-title'>Error</h1>
                  <img src="images/error.png" alt="" />
                  <p>* Please Sign in or Login in Before Using Rocket Math *</p>
              </div>
              
              <div className='error-sign-in'>
                      <h3>Create Your Account</h3>
                      <p className='sub' >Sign Up Now and Start Your Rocket Math Journey</p>
                      <button 
                      className='sign-in' 
                      onMouseEnter={changeSpanBackground}
                      onMouseLeave={resetSpanBackground}
                      onClick={handleSignInClick}
                      >Sign in</button>
                      
              </div>

              <span style={topSpanStyle} className='top-left'></span>
              <span style={bottomSpanStyle} className='bottom-right'></span>
          </div>

          <img className='moon' src="images/moonAstronaut.gif" alt="" />
          <img className='pencil' src="images/pencilAstronaut.gif" alt="" />
          <img className='gun' src="images/Astronaut3.gif" alt="" />
        </div> 
      )}


      {!rightBackground && (
        <div className='error-container'>
            
          <div className='error-box'>

              <div style={leftContainerStyle} className='error-message fill-background'>
                  <h1 style={titleStyle} className='error-title'>Already Have Account?</h1>
                  <p className='log-in-message'>Welcome back! Log in to continue playing</p>
                  <button 
                  className='log-in-button'
                  onMouseEnter={changeSpanBackground}
                  onMouseLeave={resetSpanBackground}
                  onClick={handleLoginClick}
                  >Log In</button>
              </div>
              
              <div style={rightContainerStyle} className='error-sign-in hide-background'>
                      <h3 style={rightTitleStyle} >Create Your Account</h3>
                      <p className='sub-title'>Join the fun and start playing today!</p>
                      <input 
                      style={topInput}
                      placeholder='Username' 
                      type="text" 
                      onMouseEnter={topInputHover}
                      onMouseLeave={topInputLeave}
                      onChange={updateUsername}
                      />
                      <input 
                      style={middleInput}
                      placeholder='Email' 
                      type="text" 
                      onMouseEnter={middleInputHover}
                      onMouseLeave={middleInputLeave}
                      onChange={updateEmail}
                      />
                      <input 
                      style={bottomInput}
                      placeholder='Password' 
                      type="text" 
                      onMouseEnter={bottomInputHover}
                      onMouseLeave={bottomInputLeave}
                      onChange={updatePassword}
                      />

                      <button 
                      className='real-sign-in' 
                      onClick={handleRegisterClick}
                      >Sign in</button>
                      
              </div>

              <span style={topSpanStyle} className='top-left'></span>
              <span style={bottomSpanStyle} className='bottom-right'></span>
          </div>

          <img className='moon' src="images/moonAstronaut.gif" alt="" />
          <img className='pencil' src="images/pencilAstronaut.gif" alt="" />
          <img className='gun' src="images/Astronaut3.gif" alt="" />
        </div> 
      )}

      
    </div>
    
  )
}

export default Error