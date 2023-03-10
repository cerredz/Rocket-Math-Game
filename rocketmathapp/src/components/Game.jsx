import React, { useState, useEffect } from 'react'

const Game = (props) => {

    
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState("");
    const [answer, setAnswer] = useState(0);
    const [showNumbers, setShowNumbers] = useState(Boolean(props.showNumbers));
    const [userAnswer, setUserAnswer] = useState("");

    const startNowButtonStyle = {
        padding: `10px 20px`, 
        marginLeft: `30px`,
        fontSize: `1.8em`,
        border:` 3px solid ${props.color}`,
        borderRadius: `40px`,
        background: `transparent`,
        color: `${props.color}`,
        boxShadow: `0 0 .25em ${props.color}`
        
    }

    const reviewRulesButtonStyle = {
        padding:`10px 20px`,
        marginRight: `30px`,
        color: `rgb(168, 38, 243)`,
        fontSize: `1.6em`,
        background: `transparent`,
        borderRadius: `40px`,
        border: `3px solid rgb(168, 38, 243)`,
        boxShadow: `0 0 .25em rgb(168, 38, 243)`
    }

    const startingInputStyle = { 
        background: `transparent`,
        borderBottom: `3px solid white`,
        color: `white`, 
        margin: `5px 15px`,
        letterSpacing: `4px`,
        fontSize: `1.3em`,
        textAlign: `center`, 
        width: `125px`,
        paddingBottom: `10px`

    }

    const startingEnterButtonStyle = {
        position: `absolute`,
        right: `0`,
        padding: `10px 20px`,
        color: `white`,
        border: `3px solid white`,
        borderRadius: `20px`,
        fontSize: `1.2em`,
        fontStyle: `italic`,
        fontWeight: `700`,
        letterSpacing: `2px`,
        background: `transparent`

    }
    const [startNowButton, setStartNowButton] = useState(startNowButtonStyle);
    const [reviewRulesButton, setReviewRulesButton] = useState(reviewRulesButtonStyle);
    const [inputStyle, setInputStyle] = useState(startingInputStyle);
    const [enterButton, setEnterButton] = useState(startingEnterButtonStyle);
    

    

    const generateNewNumbers = () => {

        let operations = ["+", "-", "*", "÷"];
        const randomIndex = Math.floor(Math.random() * operations.length);
        const randomOperation = operations[randomIndex];
        setOperator(randomOperation);

    
        if(randomOperation === "÷") {
            let numerator = 3;
            let denominator = 2;

            while( numerator % denominator !== 0){
                numerator = Math.floor(Math.random() * 500 + 1);
                denominator = Math.floor(Math.random() * 10 + 1);
            }

            setFirstNumber(Math.floor(numerator));
            setSecondNumber(Math.floor(denominator));
            setAnswer(Math.floor(numerator / denominator));
        }else if (randomOperation === "*") {

            let firstNumb = 1000;
            let secondNumb = 1000;

            while(firstNumb * secondNumb > 200) {
                firstNumb = Math.floor(Math.random() * 100 + 1);
                secondNumb = Math.floor(Math.random() * 100 + 1);
            }

            setFirstNumber(firstNumb);
            setSecondNumber(secondNumb);
            setAnswer(firstNumb * secondNumb);
        }else if(randomOperation === "+"){

            let firstNumb = 1500;
            let secondNumb = 1500;

            while(firstNumb + secondNumb > 500) {
                firstNumb = Math.floor(Math.random() * 250 + 1);
                secondNumb = Math.floor(Math.random() * 250 + 1);
            }

            setFirstNumber(firstNumb);
            setSecondNumber(secondNumb);
            setAnswer(firstNumb + secondNumb);
        }else {
            let firstNumb = 1500;
            let secondNumb = 2500;

            while(firstNumb - secondNumb < 0){
                firstNumb = Math.floor(Math.random() * 250 + 1);
                secondNumb = Math.floor(Math.random() * 250 + 1);
            }

            setFirstNumber(firstNumb);
            setSecondNumber(secondNumb);
            setAnswer(firstNumb - secondNumb);
        }
    }

    useEffect( () => {
        generateNewNumbers();
        console.log(showNumbers)
    },[])

    const handleStartNowButtonHover = () => {
        setStartNowButton( {
            padding: `10px 20px`, 
            marginLeft: `30px`,
            fontSize: `1.8em`,
            border:` 3px solid ${props.color}`,
            borderRadius: `40px`,
            background: `${props.color}`,
            color: `white`,
            boxShadow: `0 0 2em ${props.color}`,
            scale: `1.1`
        })
        

    }

    const handleStartNowButtonLeave = () => {

        setStartNowButton( {
            padding: `10px 20px`, 
            marginLeft: `30px`,
            fontSize: `1.8em`,
            border:` 3px solid ${props.color}`,
            borderRadius: `40px`,
            background: `transparent`,
            color: `${props.color}`,
            boxShadow: `0 0 .25em ${props.color}`
        })
        
    }

    const handleReviewButtonHover = () => {
        setReviewRulesButton( {
            padding:`10px 20px`,
            marginRight: `30px`,
            color: `white`,
            fontSize: `1.6em`,
            background: `rgb(168, 38, 243)`,
            borderRadius: `40px`,
            border: `3px solid rgb(168, 38, 243)`,
            boxShadow: `0 0 2em rgb(168, 38, 243)`,
            scale: `1.1`
        })
        
    }

    const handleReviewButtonLeave = () => {

        setReviewRulesButton( {
            padding:`10px 20px`,
            marginRight: `30px`,
            color: `rgb(168, 38, 243)`,
            fontSize: `1.6em`,
            background: `transparent`,
            borderRadius: `40px`,
            border: `3px solid rgb(168, 38, 243)`,
            boxShadow: `0 0 .25em rgb(168, 38, 243)`
        })
        
    }

    const handleGenerateNumbersClick = () => {
        generateNewNumbers();
        setShowNumbers(!showNumbers);
        
    }

    const handleEnterButtonHover = () => {
        setEnterButton( {
            position: `absolute`,
            right: `0`,
            padding: `10px 20px`,
            color: `black`,
            border: `3px solid white`,
            borderRadius: `20px`,
            fontSize: `1.2em`,
            fontStyle: `italic`,
            fontWeight: `700`,
            letterSpacing: `2px`,
            background: `white`,
            boxShadow: `0 0 1em white`
        })
    }

    const handleEnterButtonLeave = () => {
        setEnterButton( {
            position: `absolute`,
            right: `0`,
            padding: `10px 20px`,
            color: `white`,
            border: `3px solid white`,
            borderRadius: `20px`,
            fontSize: `1.2em`,
            fontStyle: `italic`,
            fontWeight: `700`,
            letterSpacing: `2px`,
            background: `transparent`
        })
        
    }

   const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            let userAnswerInt = parseInt(userAnswer);
            console.log(userAnswerInt);
            if(userAnswerInt === answer) {
                props.handleCorrectAnswer();
                generateNewNumbers();
            } else {
                props.handleWrongAnswer();
            }
            
            
            setUserAnswer("");
        }
   }

   const handleEnterButtonClick = () => {
        let userAnswerInt = parseInt(userAnswer);
        console.log(userAnswerInt);
        if(userAnswerInt === answer) {
            props.handleCorrectAnswer();
            generateNewNumbers();
        }else {
            props.handleWrongAnswer();
        }

        setUserAnswer("");
   }

   const handleUserInput = (event) => {
        setUserAnswer(event.target.value);
        
   }


   
  return (
    <div > 
    {showNumbers && (
        
        <div className='game-container' onKeyDown={handleKeyDown}> 
            
           <div className='practice-numbers-container'>
                <h2 className='first-number'>{firstNumber}</h2>
                <span className='operator'>{operator}</span>
                <h2 className='second-number'>{secondNumber}</h2>
                <hr className='horizontal-line'/>
                <div className='input-container'>
                    <input placeholder='Answer' value={userAnswer} onChange={handleUserInput} style={inputStyle} type="text" />
                    <button 
                    style={enterButton} 
                    onMouseEnter={handleEnterButtonHover}
                    onMouseLeave={handleEnterButtonLeave}
                    onClick={handleEnterButtonClick}
                    >Enter</button>
                </div>
                
           </div>
           
            
        </div>
    )}
    
    {!showNumbers && (
        <div className='game-container'>
            <p style={{fontSize: `1.2em`}}>Click start now to begin practicing math problems. Feel free to stay as long as you want.</p>
            <div className='game-button-container'>
                <button 
                className='white'
                style={reviewRulesButton}
                onMouseEnter={handleReviewButtonHover}
                onMouseLeave={handleReviewButtonLeave}
                >Review Rules</button>
                <button
                className='light-blue' 
                style={startNowButton} 
                onClick={handleGenerateNumbersClick}
                onMouseEnter={handleStartNowButtonHover}
                onMouseLeave={handleStartNowButtonLeave}
                  >Start Now</button>
            </div>

        
        </div>
    )}
    </div>
  )
  
}


export default Game
