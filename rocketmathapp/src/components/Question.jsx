import React, {useState, useEffect} from 'react'

const Question = (props) => {

    const [firstColor, setFirstColor] = useState(props.firstColor);
    const [secondColor, setSecondColor] = useState(props.secondColor);
    const [numberBackground, setNumberBackground] = useState(`linear-gradient(to bottom right, ${firstColor}, ${secondColor})`);
    const [numberBoxShadow, setNumberBoxShadow] = useState(`0 0 .5em ${firstColor}`)
    const [showAnswer, setShowAnswer] = useState(false);
    //set the background of the question number to the right colors
    useEffect(() => {
        setNumberBackground(`linear-gradient(to bottom right, ${firstColor}, ${secondColor})`);
        setNumberBoxShadow(`0 0 1em ${firstColor}`)

    },[])

    //styles to be changed when button to show answer is clicked
    const [questionTitleStyle, setQuestionTitleStyle] = useState({});
    const [imageStyle, setImageStyle] = useState({});
    

    const handleToggleAnswer = () => {

        if(showAnswer === false) {
            setImageStyle({
                transform: `rotate(180deg)`
            })
            setQuestionTitleStyle({
                background: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
                WebkitBackgroundClip: `text`, 
                WebkitTextFillColor: `transparent`
            })
        }else {
            setImageStyle({})
            setQuestionTitleStyle({})
        }
        setShowAnswer(prevValue => !prevValue);
    
    }

return (
    <div className='question-container'>


        
        <div className='question-number' style={{background: numberBackground, boxShadow: numberBoxShadow}}>
            <h3 style={{marginBottom: `0`}}>{props.questionNumber}</h3>
        </div>

        <div className='question-title'>
            <span style={questionTitleStyle}>{props.question}</span>
            <img 
            src="images/down-arrow.png"
            onClick={handleToggleAnswer}
            alt="Down-arrow"
            style={imageStyle}
            ></img>
                
        </div>
       
        

        {showAnswer && (
            <div className='faq-answer'>
                <hr />
                <p>{props.answer}</p>
            </div>
        )}
        
    </div>
    )
}

export default Question