import React from "react"
import anime from 'animejs'
import Result from './Result'

export default function QuizResults({userAnswers, setHasStarted, questionsData}) {
    function calCorrectCnt(userAnswers) {
        return  userAnswers.reduce((cnt, currAnswer) => 
        currAnswer.userAnswer === currAnswer.correctAnswer ?
            cnt += 1 :
            cnt, 0)
    }

    function displayResults() {
        return questionsData.map((question, i) => {
            return <Result key={i} questionData = {question} userAnswer = {userAnswers[i]}/>
        })
    }

    React.useEffect(() => {
        anime({
            targets: '.results__score, .result',
            opacity: 1,
            easing: 'easeInQuart',
            delay: anime.stagger(50) 
        });
    }, [])

    return (
        <div className="results">
            <h1 className="results__score">You scored {calCorrectCnt(userAnswers)} / {questionsData.length} </h1>
            {displayResults()}
            <button className="results__start-over-btn" onClick={() => setHasStarted((prev) => !prev)}>Start Over</button>
        </div>
    )
}