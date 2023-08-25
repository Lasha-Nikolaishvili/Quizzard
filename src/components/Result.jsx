import React from 'react'

export default function Result({questionData, userAnswer}) {
    const {correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, question} = questionData
    const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer])
    
    const correctAnswerStyleswrongAnswerStyles = {
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
    
    function convertHtmlToText(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    function displayAnswers() {
        return allAnswers.map((answer) => {
            if (answer === correctAnswer) {
                return <button style = {correctAnswerStyleswrongAnswerStyles} className='result__btn-group__btn'>{convertHtmlToText(answer)}</button>
            } else if(answer !== correctAnswer && userAnswer.userAnswer === answer){
                return <button style = {wrongAnswerStyles} className='result__btn-group__btn'>{convertHtmlToText(answer)}</button>
            } else {
                return <button className='result__btn-group__btn'>{convertHtmlToText(answer)}</button>
            }
            
        })
    }
   
    return (
        <div className='result'>
            <h1 className='result__question'>{convertHtmlToText(question)}</h1>
            <div className="result__btn-group">
                {displayAnswers()}
            </div>
        </div>
    )
}