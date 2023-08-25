import React from "react"
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

    return (
        <div className="results">
            <h1 className="results__score">You got {calCorrectCnt(userAnswers)} / {questionsData.length} </h1>
            {displayResults()}
            <button className="results__start-over-btn" onClick={() => setHasStarted((prev) => !prev)}>Start Over</button>
        </div>
    )
}