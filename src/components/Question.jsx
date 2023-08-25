import React from 'react'

export default function Question({questionData, setQuestionNum, setUserAnswers}) {
    const {correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, question} = questionData
    const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer])
    
    function convertHtmlToText(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    function handleClick(answerIndex) {
        const userAnswer = allAnswers[answerIndex]
        setUserAnswers((prevUserAnswers => [...prevUserAnswers, {userAnswer: userAnswer, correctAnswer:correctAnswer}]))
        setQuestionNum(prevNum => prevNum + 1)
    }

    function displayAnswers() {
        return allAnswers.map((answer, i) => (
            <button key={i} onClick={() => handleClick(i)} className='btn-group__btn'>{convertHtmlToText(answer)}</button>
        ))
    }

    return (
        <div>
            <h1 className='question'>{convertHtmlToText(question)}</h1>
            <div className="btn-group">
                {displayAnswers()}
            </div>
        </div>
    )
}