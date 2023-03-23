import React from 'react';
import Question from './Question';

const FAQ = () => {
  return (

    <div className='faq-container'>
        <h1 className='FAQ-title'>Frequently Asked Questions</h1>
        <Question
          questionNumber="01"
          question="How do I play Rocket Math?"
          firstColor="#8BF5FA"
          secondColor="#2F58CD"
          answer="To start your Rocket Math journey, create an account by 
          clicking the sign-up button on the homepage. Then, select your desired game 
          mode - practice, casual, or ranked - by navigating to the 'Game Modes' tab on 
          the left-hand side of your screen.Good luck as you climb the ranks and 
          aim to become a Rocket Math Grandmaster!"
          
         />

        <Question 
          questionNumber="02"
          question="What are the rules of Rocket Math"
          firstColor="#2F58CD"
          secondColor="#00235B"
          answer="
          1) Players will be given a series of problems to solve.                 
          2) The types of problems will be simple addition, substraction, multiplication, and division.
          3) Problems can not be skipped, you must answer a problem until you get it right.
          4) Each Game has a 1 minute-time limit (Casual and Ranked mode only).
          5) Dont be a noob and use a calculator.
          6) Have fun and enjoy the journey."
        />
        <Question 
          questionNumber="03"
          question="What Is the Difference Between Practice, Casual, and ranked?"
          firstColor="#AD7BE9"
          secondColor="#5D3891"
          answer="The three game modes differ in time limit and how they 
          affect your rank, level, and coin balance. 
          Practice mode has no time limit and doesn't count towards your level, coin balance, or rank. 
          Casual mode has a 1 minute time limit per game and counts towards level and coin 
          balance, but not rank. Ranked mode has a 1 minute time limit, 
          affects your rank based on accuracy and volume of questions answered, 
          and also counts towards your level and coin balance."

        />
        <Question 
          questionNumber="04"
          question="What types of math problems will I be solving? "
          firstColor="#CB1C8D"
          secondColor="#E384FF"
          answer="With a 1-minute time limit per game, complex subjects like geometry
          , calculus, and trigonometry are not included. Instead, you will see basic 
          math problems such as addition, multiplication, subtraction, and division. 
          We aim to make Rocket Math accessible for all ages and skill levels. 
          Keep in mind, however, that simple problems do not equate to an easy win. 
          Do you have what it takes to become a Rocket Math Grandmaster?"
        />
        <Question 
          questionNumber="05"
          question="What can I spend my coins on? "
          firstColor="#2F58CD"
          secondColor="#2B3467"
          answer="We're currently working on the Rocket Math shop, 
          but it's not quite ready yet. When it's released, you can look forward 
          to a variety of visual and audio cosmetics, rank-boosting perks, coin and 
          level boosters, and more. In the meantime, just focus on stacking your 
          coins and your patience will be rewarded in the long run."

        />
        <Question 
          questionNumber="06"
          question="Can I play against other players online?"
          firstColor="#8F43EE"
          secondColor="#3A1078"
          answer="Currently, Rocket Math is solely a single player game, 
          designed to help individuals improve their math skills while having fun.
          However, the team behind Rocket Math is committed to listening to its 
          users and making changes that enhance the gaming experience. If a 
          significant number of users express interest in a multiplayer game mode,
          the development team will be more than happy to explore this option and 
          implement it in a way that adds value to the game."
        />
        <Question 
          questionNumber="07"
          question="What is the best way to rank up?"
          firstColor="#CF4DCE"
          secondColor="#9A1663"
          answer="There is an old saying that practice makes perfect, and that is exactly
          what you should do to rank up in Rocket Math. The more math problems you 
          complete the closer you become to achieving the pinnacle of the math world:
          a Rocket Math Grandmaster. And remember, success doesnt happend over night, 
          if ranking up was easy then it wouldnt be worth doing."
        />
        <Question 
          questionNumber="08"
          question="How can I make it on the leaderboard?"
          firstColor="#E384FF"
          secondColor="#301E67"
          answer="Leaderboards on Rocket Math work a bit differently than what
           most people might expect. Instead of being solely based on the highest 
           rank achieved, our leaderboards are determined by the highest level 
           attained by the player. This approach helps to showcase and highlight 
           the individuals who have put in a great deal of time and dedication 
           to the game, rather than just those who have achieved the highest 
           rank by completing a certain number of games. By using this method, 
           we hope to encourage players to strive for excellence and improve their 
           skills over time, rather than just focusing on quickly reaching the 
           top rank."
        />

 
        
    </div>
  )
}

export default FAQ