import React, {useState} from 'react';
import Axios from 'axios';
import App from '../App';

const Signup = (props) => {

  const [showLogin, setShowLogin] = useState(true);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const[usersList, setUsersList] = useState([]);

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
          props.handleRegisterSuccess(email, userName);
      }

    })
    
  }

  const handleLoginClick = (event) => {
    event.preventDefault();

    Axios.get('http://localhost:3001/users').then((response) => {
      let correctLogin = false;
      response.data.forEach((user) => {
        if(userName === user.userName && password === user.password){
          correctLogin = true;
        }
      });

      if(!correctLogin){
        alert("Username and password incorrect, please enter your correct username and password");
      }else {
        props.handleLoginSuccess(userName);
      }

    })
  }

  const handleClickLogin  = () => {
    if(!showLogin) {
      setShowLogin(!showLogin);
    }
    
  }

  const handleClickRegister = () => {
    if(showLogin){
      setShowLogin (!showLogin);
    }
  }

  const updateUsername = (event) => {
    setUsername(event.target.value);
    
  }

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  const updateEmail = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      { showLogin && (
        <div className='signup-container' >
          <div className='signup-info sign-in-shadow sign-in-border' style={{opacity: showLogin ? 1 : 0}}>
            <div className='button-box sign-in-button-shadow'>
              <div id='btn' className='sign-in-button-lg'></div>
      
              <button type='button' className='toggle-btn' onClick={handleClickLogin}>Log in</button>
              <button type='button' className='toggle-btn' onClick={handleClickRegister}>Register</button>
            </div>
            <div className='icons'>
              <img src="images/blue-home.png" alt="" onClick={ () => props.handleBack()}/>
            </div>
            <form id='login' className='singup-input'>
              <input type="text" className='input-field sign-in-border-bottom' placeholder='Username' onChange={updateUsername}  required/>
              <input type="text" className='input-field sign-in-border-bottom' placeholder='Password' onChange={updatePassword} required/>
              <input type="checkbox" className='check-box' /><span>Remember Password</span>
              <button type='submit'  onClick={handleLoginClick} className='submit-btn sign-in-button-lg sign-in-button-margin'>Log In</button>
            </form>
          </div>
          
          <div className='return-button-container'> 
                <button onClick={() => props.handleBack()} className='return-button'>Return to Homepage</button>
          </div>
        </div>
      )}

      {!showLogin &&  (
                <div className='signup-container' >
                  <div className='log-in-info log-in-shadow log-in-border ' style={{ opacity: !showLogin ? 1 : 0 }}>
                    <div className='button-box log-in-button-shadow'>
                      <div id='log-in-btn' className='log-in-button-lg'></div>
              
                      <button type='button' className='toggle-btn' onClick={handleClickLogin}>Log in</button>
                      <button type='button' className='toggle-btn' onClick={handleClickRegister}>Register</button>
                    </div>
                    <div className='icons'>
                      <img src="images/purple-home.png" alt="" onClick={ () => props.handleBack()}/>
                    </div>
                    <form id='register' className='singup-input '>
                      <input type="text" className='input-field log-in-border-bottom' placeholder='Username' onChange={updateUsername} required/>
                      <input type="email" className='input-field log-in-border-bottom' placeholder='Email' onChange={updateEmail} />
                      <input type="text" className='input-field log-in-border-bottom' placeholder='Password' onChange={updatePassword} required/>
                      <button type='submit'  onClick={handleRegisterClick}  className='submit-btn log-in-button-lg log-in-button-margin'>Register</button>
                    </form>
                    
                  </div>
                  <div className='return-button-container'> 
                    <button  onClick={() => props.handleBack()} className='return-button'>Return to Homepage</button>
                  </div>
                
      
              </div>
      )}

      
    </div>
  )

}

export default Signup;


