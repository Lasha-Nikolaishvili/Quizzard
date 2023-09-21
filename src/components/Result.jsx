import React from 'react'

export default function Result({questionData, userAnswer}) {
    const {correctAnswer, allAnswers, question} = questionData
    
    const correctAnswerStyles = {
        backgroundColor: '#0094ff',
        boxShadow:' 0px 5px 10px 2px #0095ff95',
        color: '#0e0f12'   
    }

    const wrongAnswerStyles = {
        backgroundColor: 'rgb(255,0,0)',
        border: 'rgb(255,0,0)',
        boxShadow:' 0px 5px 10px 2px rgba(255,0,0,0.5)',
        color: '#0e0f12'   
    }

    const answers = 
        allAnswers.map((answer, i) => {
            if (answer === correctAnswer) {
                return <button key={i} style = {correctAnswerStyles} className='result__btn-group__btn'>{answer}</button>
            } else if(answer !== correctAnswer && userAnswer.userAnswer === answer){
                return <button key={i} style = {wrongAnswerStyles} className='result__btn-group__btn'>{answer}</button>
            } else {
                return <button key={i} className='result__btn-group__btn'>{answer}</button>
            }
        })
   
    return (
        <div className='result'>
            <h1 className='result__question'>{question}</h1>
            <div className="result__btn-group">{answers}</div>
        </div>
    )
}