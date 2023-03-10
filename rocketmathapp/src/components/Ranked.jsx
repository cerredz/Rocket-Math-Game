import React, {useState, useEffect} from 'react'
import Axios from 'axios';

const Ranked = (props) => {


const startingPlayNowButton = {
    marginRight: `25px`,
    padding: `10px 20px`,
    borderRadius: `30px`,
    background: `${props.color}`,
    border: `3px solid ${props.color} `,
    letterSpacing: `2px`,
    fontSize:`.9em`,
    color: `black`

}

const startingReviewButton = {
    padding: `10px 20px`,
    borderRadius: `30px`,
    border: `3px solid #ffff`,
    background: `transparent`,
    letterSpacing: `2px`,
    fontSize: `.9em`,

}

const startingContainerStyle = {
    
    
    width: `400px`,
    height: `500px`,
    padding: `25px`,
    margin: `20px`,
    display: `grid`,
    placeItems: `center`,
    background: `rgba(255,255,255,.05)`,
    boxShadow: `0 0 2em rgba(255,255,255, 0.05)`,
    border: `1px solid rgba(255,255,255,.2)`,
    borderRadius: `15px`,
    
}

const startingAnswerInputStyle = {
    background: `transparent`,
    textAlign: `center`, 
    color: `white`,
    width: `175px`,
    letterSpacing: `3px`,
    padding: `5px 20px`,
    margin: `0 30px`,
    fontSize: `1.5em`,
    transform: `translateY(-25%)`

}

const startingEnterStyle = {
    background: `transparent`,
    padding: `10px 20px`,
    margin: `20px 10px`,
    letterSpacing: `3px`,
    fontSize: `1.1em`,
    borderRadius: `30px`,
    border: `2px solid white`
}

const startingPlayAgainButton = {
    border: `3px solid ${props.color}`,
    color: `${props.color}`
}




const [playNowButton, setPlayNowButton] = useState(startingPlayNowButton);
const [reviewButton, setReviewButton] = useState(startingReviewButton);
const [gameContainerStyle, setGameContainerStyle] = useState(startingContainerStyle);
const [answerInputStyle, setAnswerInputStyle] = useState(startingAnswerInputStyle);
const [enterButtonStyle, setEnterButtonStyle] = useState(startingEnterStyle);
const [countDownStyle, setCountDownStyle] = useState({})
const [playAgainButton, setPlayAgainButton] = useState(startingPlayAgainButton)

const [playNow, setPlayNow] = useState(false);
const [showCountDown, setShowCountdown] = useState(true);
const [countDown, setCountDown] = useState(3);
const [officialCountDown, setOfficialCountdown] = useState(60);
const [timeLeft, setTimeLeft] = useState(true);
const [username, setUsername] = useState(props.username);
const [currentUser, setCurrentUser] = useState({});
const [rankup, setRankup] = useState(false);
const [rankImage, setRankImage] = useState("");
const [nextRank, setNextRank] = useState("");



const [correctAnswers, setCorrectAnswers] = useState(0);
const [correctStreak, setCorrectStreak] = useState(0);
const [coins, setCoins] = useState(0);
const [experience, setExperience] = useState(0);



const reportStats = () => {
    
    Axios.post('http://localhost:3001/casual', {
        user: username,
        correct: coins,
        actualCorrect: correctAnswers,
        experience: experience

    }).then(() => {
        console.log("Successfully posted data to the backend")
    }).catch((error) => {
        console.log(error)
    });

}

const updateRank = (rank) => {


    Axios.post(`http://localhost:3001/ranked`, {
        user: username,
        currentRank: rank,
    }).then(() => {
        console.log("Successfully posted Rank Up to the Backend")
    }).catch((error) => {
        console.log(error)
    })
}

useEffect(() => {
    Axios.get(`http://localhost:3001/users/${username}`)
      .then((response) =>  {
        setCurrentUser(response.data);
        
  })
      .catch((error) => console.log(error));
  }, [username])



const handlePlayNowButtonEnter = () => {
    setPlayNowButton({
        marginRight: `25px`,
        padding: `10px 20px`,
        borderRadius: `30px`,
        background: `transparent`,
        border: `3px solid ${props.color} `,
        letterSpacing: `2px`,
        fontSize:`.9em`,
        transform: `translateX(5%) translateY(-5%)`,
        color: `${props.color}`
        

    })
}

const handlePlayNowButtonLeave = () => {
    setPlayNowButton({
        marginRight: `25px`,
        padding: `10px 20px`,
        borderRadius: `30px`,
        background: `${props.color}`,
        border: `3px solid ${props.color} `,
        letterSpacing: `2px`,
        fontSize:`.9em`,
        color: `black`
    })
}

const handleReviewButtonEnter = () => {
    setReviewButton( {
        padding: `10px 20px`,
        borderRadius: `30px`,
        border: `3px solid #ffff`,
        background: `#ffff`,
        color: `black`,
        letterSpacing: `2px`,
        fontSize: `.9em`,
        

    })
}

const handleReviewButtonLeave = () => {
    setReviewButton({ 
        padding: `10px 20px`,
        borderRadius: `30px`,
        border: `3px solid #ffff`,
        background: `transparent`,
        letterSpacing: `2px`,
        fontSize: `.9em`,
    })
}

const handlePlayNowButtonClick = () => {
    setPlayNow(true);

    setInterval(() => {
        setCountDown(countDown => countDown - 1)
    }, 1000)

    setTimeout(()=> {
        setShowCountdown(false)
        setInterval(() => {
            setOfficialCountdown(officialCountDown => {
                if(officialCountDown > 0) {
                    return officialCountDown - 1
                } else {
                    handleNoTimeLeft()
                    return 60;
                    
                    
                }
            });
            
        }, 1000)

        

        setGameContainerStyle( {
            
            width: `400px`,
            height: `500px`,
            margin: `20px`,
            position: `relative`,
            textAlign: `center`,
            background: `rgba(255,255,255,.05)`,
            boxShadow: `0 0 2em rgba(255,255,255, 0.05)`,
            border: `1px solid rgba(255,255,255,.2)`,
            borderRadius: `15px`,
            
        })

    },3000)

}

const handleButtonEnter = () => {
    setEnterButtonStyle ( {
        background: `white`,
        padding: `10px 20px`,
        margin: `20px 10px`,
        letterSpacing: `3px`,
        fontSize: `1.1em`,
        color: `black`,
        borderRadius: `30px`,
        border: `2px solid white`
    })
}

const handleButtonLeave = () => {
    setEnterButtonStyle({

        background: `transparent`,
        padding: `10px 20px`,
        margin: `20px 10px`,
        letterSpacing: `3px`,
        fontSize: `1.1em`,
        borderRadius: `30px`,
        border: `2px solid white`
        
    })
}

const handleInputClick = () => {
    setAnswerInputStyle( {
        background: `transparent`,
        textAlign: `center`, 
        color: `white`,
        width: `175px`,
        letterSpacing: `3px`,
        padding: `5px 20px`,
        margin: `0 30px`,
        fontSize: `1.5em`,
        transform: `translateY(-25%)`
    })

    
}


const [firstNumber, setFirstNumber] = useState(0);
const [secondNumber, setSecondNumber] = useState(0);
const [operator, setOperator] = useState("");
const [answer, setAnswer] = useState(0);
const [userAnswer, setUserAnswer] = useState("")

const generateNumbers = () => {

    var operations = ["+", "-", "*", "÷"];
    const randomIndex = Math.floor(Math.random() * operations.length);
    const randomOperation = operations[randomIndex];
    setOperator(randomOperation);
    var firstNum = 3000;
    var secondNum = 2000;
    var numOneLength = firstNum.toString().length;
    var numTwoLength = secondNum.toString().length;

    if(randomOperation === "÷") {

        while(firstNum % secondNum !== 0 || secondNum > firstNum) {
            firstNum = Math.floor(Math.random() * 100 + 1);
            secondNum = Math.floor(Math.random() * 20 + 1);
        }

        
        setAnswer(Math.floor(firstNum / secondNum));

    } else if (randomOperation === "*") {

        
        while(numOneLength < numTwoLength || firstNum * secondNum > 200 || ( firstNum * secondNum > 100 && firstNum * secondNum % 5 !== 0)) {
            firstNum = Math.floor(Math.random() * 50 + 1);
            secondNum = Math.floor(Math.random() * 50 + 1);
            numOneLength = firstNum.toString().length;
            numTwoLength = secondNum.toString().length;
        }

        setAnswer(firstNum * secondNum)
    
    } else if (randomOperation === "+" ) {


        while(numOneLength < numTwoLength || secondNum > firstNum || (firstNum + secondNum > 150 || (firstNum + secondNum > 50 && firstNum + secondNum % 5 !== 0))) {
            firstNum = Math.floor(Math.random() * 200 + 1);
            secondNum = Math.floor(Math.random() * 200 + 1);
            numOneLength = firstNum.toString().length;
            numTwoLength = secondNum.toString().length;
        }

        setAnswer (firstNum + secondNum);

    } else if (randomOperation === "-") {

        while(numOneLength < numTwoLength || firstNum - secondNum < 0 || firstNum - secondNum > 200 || (firstNum - secondNum % 5 !== 0 && firstNum - secondNum > 60)) {

            firstNum = Math.floor(Math.random() * 200 + 1);
            secondNum = Math.floor(Math.random() * 200 + 1);
            numOneLength = firstNum.toString().length;
            numTwoLength = secondNum.toString().length;
        }
        setAnswer(firstNum - secondNum);
    }

    setFirstNumber(firstNum);
    setSecondNumber(secondNum)

}

useEffect(() => {
    generateNumbers();
}, [])

const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
        
        let userAnswerInt = parseInt(userAnswer);
        if(userAnswerInt === answer) {
            
            handleCorrectAnswer();
            generateNumbers();
            console.log(correctAnswers)
            
            
        }else {

            handleWrongAnswer();
        }

        setUserAnswer("");
    }
}

const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
}

const handleCorrectAnswer = () => {
    
    const audio = new Audio('images/correctSoundEffect.mp3');
    audio.volume = .5;
    audio.play();
    setCorrectStreak(prevStreak => prevStreak + 1);
    setCorrectAnswers(prevAnswer => prevAnswer + 1);
    setCoins(prevCoins => prevCoins + (parseInt(correctStreak / 4) + 1))

    setGameContainerStyle({
        width: `400px`,
        height: `500px`,
        margin: `20px`,
        position: `relative`,
        textAlign: `center`,
        background: `rgba(255,255,255,.05)`,
        boxShadow: `0 0 4em #38E54D`,
        border: `1px solid rgba(255,255,255,.2)`,
        borderRadius: `15px`,
        transition: `.2s ease-in-out`,
        
    })

    setCountDownStyle({
        color: `#38E54D`,
        transition: `.2s ease-in-out`
    })

    setEnterButtonStyle( {
        
        background: `transparent`,
        padding: `10px 20px`,
        margin: `20px 10px`,
        letterSpacing: `3px`,
        fontSize: `1.1em`,
        borderRadius: `30px`,
        border: `2px solid #38E54D`,
        color: `#38E54D`,
        transition: `.2s ease-in-out`
    })

    setTimeout(() => {
        setCountDownStyle({
            color: `white`,
            
            
        })

        setEnterButtonStyle({

            background: `transparent`,
            padding: `10px 20px`,
            margin: `20px 10px`,
            letterSpacing: `3px`,
            fontSize: `1.1em`,
            borderRadius: `30px`,
            border: `2px solid white`,
            
        })

        setGameContainerStyle({
            width: `400px`,
            height: `500px`,
            margin: `20px`,
            position: `relative`,
            textAlign: `center`,
            background: `rgba(255,255,255,.05)`,
            boxShadow: `0 0 2em rgba(255,255,255, 0.05)`,
            border: `1px solid rgba(255,255,255,.2)`,
            borderRadius: `15px`,
            
            
        })
    }, 350)

    
    
}

const handleWrongAnswer = () => {
    
    const audio = new Audio('images/wrongSoundEffect.mp3');
    audio.volume = .1;
    audio.play();

    setGameContainerStyle({
        width: `400px`,
        height: `500px`,
        margin: `20px`,
        position: `relative`,
        textAlign: `center`,
        background: `rgba(255,255,255,.05)`,
        boxShadow: `0 0 4em #DC0000`,
        border: `1px solid rgba(255,255,255,.2)`,
        borderRadius: `15px`,
        transition: `.2s ease-in-out`,
        
    })

    setCountDownStyle({
        color: `#DC0000`,
        transition: `.2s ease-in-out`
    })

    setEnterButtonStyle( {
        
        background: `transparent`,
        padding: `10px 20px`,
        margin: `20px 10px`,
        letterSpacing: `3px`,
        fontSize: `1.1em`,
        borderRadius: `30px`,
        border: `2px solid #DC0000`,
        color: `#DC0000`,
        transition: `.2s ease-in-out`
    })

    setTimeout(() => {
        setCountDownStyle({
            color: `white`,
        
        })

        setEnterButtonStyle({

            background: `transparent`,
            padding: `10px 20px`,
            margin: `20px 10px`,
            letterSpacing: `3px`,
            fontSize: `1.1em`,
            borderRadius: `30px`,
            border: `2px solid white`,
            
        })

        setGameContainerStyle({
            width: `400px`,
            height: `500px`,
            margin: `20px`,
            position: `relative`,
            textAlign: `center`,
            background: `rgba(255,255,255,.05)`,
            boxShadow: `0 0 2em rgba(255,255,255, 0.05)`,
            border: `1px solid rgba(255,255,255,.2)`,
            borderRadius: `15px`,
           
            
        })
    }, 350)

    setCorrectStreak(0);

}

const handleNoTimeLeft = () => {
    setTimeLeft(false);
    
}

useEffect(() => {
    Axios.get(`http://localhost:3001/users/${username}`)
        .then((response) => {
            setCurrentUser(response.data);
            const currentRank = response.data.rank;

            if(correctAnswers > 0 && !timeLeft) {
                console.log("Sending data to the backend...");
                console.log("Username: ", username);
                console.log("Correct Answers:", correctAnswers);
                reportStats();

                //must update rank if they get enough answers correct
                if(currentRank === "unranked" && correctAnswers > 6) {
                    setRankup(true);
                    updateRank("unranked");
                    setRankImage(`images/bronze.png`);
                    setNextRank("bronze");

                }else if (currentRank === "bronze" && correctAnswers > 12) {
                    setRankup(true);
                    updateRank("bronze");
                    setRankImage(`images/silver.png`);
                    setNextRank("silver");

                }else if (currentRank === "silver" && correctAnswers > 18) {
                    setRankup(true);
                    updateRank("silver");
                    setRankImage(`images/gold.png`);
                    setNextRank("gold");

                } else if (currentRank === "gold" && correctAnswers > 24) {
                    setRankup(true);
                    updateRank("gold");
                    setRankImage(`images/platinum.png`);
                    setNextRank("platinum");

                }else if (currentRank === "platinum" && correctAnswers > 30) {
                    setRankup(true);
                    updateRank("platinum");
                    setRankImage(`images/diamond.png`);
                    setNextRank("diamond");

                }else if(currentRank === "diamond" && correctAnswers > 36) {
                    setRankup(true);
                    updateRank("diamond");
                    setRankImage(`images/grandmaster.png`);
                    setNextRank("grandmaster");

                }else {
                    setRankup(false);
                }

            } else if (correctAnswers > 0) {
                setExperience(Math.max(experience, correctAnswers + parseInt(coins / correctAnswers)))
            }
        })
        .catch((error) => console.log(error));
}, [correctAnswers, timeLeft, username, coins])


const handlePlayAgainClick = () => {

    setTimeLeft(true) 
    setOfficialCountdown(60) 
    setCorrectAnswers(0);
    setCoins(0);
    setPlayAgainButton(startingPlayAgainButton);
    setRankup(false);
    setUserAnswer("");
    generateNumbers();

}

const handlePlayAgainEnter = () => {
    setPlayAgainButton( {
        border: `3px solid ${props.color}`,
        background: `${props.color}`,
        color: `white`,
        boxShadow: `0 0 2em ${props.color}`
    })
}

const handlePlayAgainLeave = () => {

    setPlayAgainButton(startingPlayAgainButton)
}

  

return (
    <div>
        
        { !playNow && (

        
            <div className='casual-container'>
                <div className="casual-text">
                    <h1>{props.title}</h1>
                    <p>{props.description} </p>
                    <div className="button-container">
                        <button 
                        style={playNowButton}
                        onMouseEnter={handlePlayNowButtonEnter}
                        onMouseLeave={handlePlayNowButtonLeave}
                        onClick={handlePlayNowButtonClick}
                        >PLAY NOW</button>
                        <button
                        style={reviewButton}
                        onMouseEnter={handleReviewButtonEnter}
                        onMouseLeave={handleReviewButtonLeave}
                        >REVIEW RULES</button>
                    </div>
                </div>

                
                
                

                <img className='astronaut' src="images/Astronaut.gif" alt="" />
                <img className='astronaut-2' src="images/Astronaut2.gif" alt="" />
                <img className='astronaut-4' src="images/Astronaut4.gif" alt="" />
                <img className='dab-astronaut' src="images/dabAstronaut.gif" alt="" />
                <img className='cloud-astronaut' src="images/cloudAstronaut.gif" alt="" />
                
                

            </div>
        )}

        {playNow && showCountDown  &&  (
            <div  className='competitive-container'>

                <div style={gameContainerStyle} className='competitive-game'>
                    <h1 className="zoom"> {countDown}</h1>
                </div>
            
        

        </div>
        )}

        {playNow && !showCountDown && timeLeft && (
            <div  className='competitive-container' onKeyDown={handleKeyDown}>

                <div style={gameContainerStyle} className='competitive-game'>
                    <h1 style={countDownStyle} className='countdown'>{officialCountDown}</h1>
                    
                    <div className='competitive-numbers-container' >
                        <h2 className='first-number'>{firstNumber}</h2>
                        <h2 className='second-number' style={{ transform: `translateX(${Math.max(firstNumber.toString().length - secondNumber.toString().length, 0) * .43}em)` }}>{secondNumber}</h2>
                        <h2 className='operator'>{operator}</h2>
                        <hr />
                        <input 
                        style={answerInputStyle} 
                        placeholder='Answer' 
                        value={userAnswer} 
                        type="text" 
                        onChange={handleAnswerChange}
                        onClick={handleInputClick}
                        />
                        <button 
                        style={enterButtonStyle} 
                        onMouseEnter={handleButtonEnter}
                        onMouseLeave={handleButtonLeave}
                        >Enter</button>
                
                    </div>
                    
                    
                </div>
                
            
    
          </div>
        )}

        {playNow && !showCountDown && !timeLeft && !rankup && (
            <div className='competitive-container'>
                <div style={gameContainerStyle} className='competitive-game'>
                    <h3 className='ranked-heading-text'>Results</h3>
                    <div className='results-container' >
                        


                        <div className='results-images'>
                            <img src="images/correct.png" alt="" />
                            <img src="images/shop-icon.png" alt="" />
                            <hr />
                            <img src="images/xp.png" alt="" />
                        </div>
                        <div className='results-stats'>
                            <p className='top-stat'>{correctAnswers}</p>
                            <p className='middle-stat'>+{coins}</p>
                            <hr />
                            <p className='bottom-stat'>+{experience}</p>
                        </div>
                        
                        <div className='play-again-container'>
                            <button 
                            style={playAgainButton} 
                            onClick={handlePlayAgainClick}
                            onMouseEnter={handlePlayAgainEnter}
                            onMouseLeave={handlePlayAgainLeave}
                            >Play Again</button>
                        </div>

                       
                        
                
                    </div>
                    
                    
                </div>
            </div>
        )}

    {playNow && !showCountDown && !timeLeft && rankup && (
        <div className='competitive-container'>
            <div style={gameContainerStyle} className='competitive-game'>
                <h3 className='ranked-heading-text'>Congrats</h3>
                <div className='rankup-container' >
                    
                    <img className='congrats-img' src="images/congrats.png" alt="" />


                    
                    <p>Congradulations, you have Ranked Up to {nextRank}</p>

                    <div className='rankup-image-container'>
                        <img src={rankImage} alt="" />
                    </div>
                    <div className='play-again-ranked-container'>
                        <button 
                        style={playAgainButton} 
                        onClick={handlePlayAgainClick}
                        onMouseEnter={handlePlayAgainEnter}
                        onMouseLeave={handlePlayAgainLeave}
                        >Play Again</button>
                    </div>
                

                


                
                    
            
                </div>
                
                
            </div>
        </div>
    ) }

        
    </div>
    
  )
}

export default Ranked