import React, {useState} from "react";

const Contact = (props) => {

    const [titleStyle, setTitleStyle] = useState({});
    //labels styles
    const [topInputTitleStyle, setTopInputTitleStyle] = useState({})
    const [middleInputTitleStyle, setMiddleInputTitleStyle] = useState({})
    const [bottomInputTitleStyle, setBottomInputTitleStyle] = useState({})

    //input styles
    const [topInputStyle, setTopInputStyle] = useState({});
    const [middleInputStyle, setMiddleInputStyle] = useState({});
    const [bottomInputStyle, setBottomInputStyle] = useState({});
    const [buttonStyle, setButtonStyle] = useState({});
    const [imageSource, setImageSource] = useState("images/blue-rocket.png")


    //top input hover effects
    const handleTopInputHover = () => {
        setTopInputStyle({
            border: `1px solid #62CDFF`,
            boxShadow: `0 0 .5em #62CDFF`
        })
        setTopInputTitleStyle({color: `#62CDFF`});
        setMiddleInputTitleStyle({color: `#62CDFF`});
        setBottomInputTitleStyle({color: `#62CDFF`});
        setTitleStyle({color: `#62CDFF`});
        setButtonStyle({background: `#62CDFF`});
    }


    //middle input hover effects
    const handleMiddleInputHover = () => {
        setMiddleInputStyle({
            border: `1px solid #8F43EE`,
            boxShadow: `0 0 .5em #8F43EE`
        })
        setTitleStyle({color: `#8F43EE`});
        setTopInputTitleStyle({color: `#8F43EE`})
        setMiddleInputTitleStyle({color: `#8F43EE`})
        setBottomInputTitleStyle({color: `#8F43EE`})
        setButtonStyle({background: `#8F43EE`})

    }

    //bottom input hover effects
    const handleBottomInputHover = () => {
        setBottomInputStyle({
            border: `1px solid rgb(168, 38, 243)`,
            boxShadow: `0 0 .5em rgb(168, 38, 243)`
        });

        setTitleStyle({color: `rgb(168, 38, 243)`})
        setTopInputTitleStyle({color: `rgb(168, 38, 243)`});
        setMiddleInputTitleStyle({color: `rgb(168, 38, 243)`});
        setBottomInputTitleStyle({color: `rgb(168, 38, 243)`});
        setButtonStyle({background: `rgb(168, 38, 243)`})
    }

    //button hover effect
    const handleButtonHover = () => {
        setButtonStyle({
            background: `transparent`,
            borderTop: `1px solid #54B435`,
            borderBottom: `1px solid #54B435`,
            letterSpacing: `6px`,
            transition: `.2s ease-in-out`,
            color: `#54B435`,
            fontWeight: `500`,
            borderRadius: `0`
        })

        setTitleStyle({color: `#54B435`});
        setTopInputTitleStyle({color: `#54B435`});
        setMiddleInputTitleStyle({color: `#54B435`});
        setBottomInputTitleStyle({color: `#54B435`});
    }

    //leave effect is same for all inputs, so we just need 1 function
    const handleInputLeave = () => {
        setTopInputStyle({border: `1px solid rgba(255,255,255,.1)` })
        setMiddleInputStyle({border: `1px solid rgba(255,255,255,.1)`})
        setBottomInputStyle({border: `1px solid rgba(255,255,255,.1)`})

        setTopInputTitleStyle({color: `white`});
        setMiddleInputTitleStyle({color: `white`});
        setBottomInputTitleStyle({color: `white`});

        setTitleStyle({color: `white`});
        setButtonStyle({background: `white`, })
    }

   

   


    

    return (
        <div className="contact-container">
          <h1 style={titleStyle} className="heading">Contact Us</h1>
           <div className="contact-info">

                <div className="contact-info-image">
                    <h1>Rocket Math Support</h1>
                    <img src={imageSource}></img>
                    <h3>We're here to support you. Please let us know how we can help.</h3>

                </div>

                <div className="contact-info-text">
                    <form action="mailto:retto12345678@gmail.com" method="post" enctype="text/plain">  
                        <label style={topInputTitleStyle} className="username-label">Username</label>
                        <input 
                        style={topInputStyle} 
                        placeholder="Username" 
                        className="contact-input"
                        onMouseEnter={handleTopInputHover}
                        onMouseLeave={handleInputLeave}
                        name="Username"></input>

                        <label style={middleInputTitleStyle} className="email-label">Email</label>
                        <input 
                        style={middleInputStyle} 
                        placeholder="Email Address"
                        className="contact-input"
                        onMouseEnter={handleMiddleInputHover}
                        onMouseLeave={handleInputLeave}
                        name="Email Address"></input>
                        
                        <label style={bottomInputTitleStyle} className="message-label">Message</label>
                        <textarea 
                        style={bottomInputStyle} 
                        placeholder="Type Your Message Here"
                        onMouseEnter={handleBottomInputHover}
                        onMouseLeave={handleInputLeave}
                        name="Message"></textarea>
                        
                        <button 
                        style={buttonStyle} 
                        className="contact-info-button" 
                        type="submit"
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleInputLeave}>Submit</button>
                    </form>
                </div>

           </div>
            <div className='return-button-container'> 
                <button style={{marginTop: `25px`, position: `relative`}} onClick={() => props.handleBack()} className='return-button'>Return to Homepage</button>
            </div>
        </div>
    )
}

export default Contact