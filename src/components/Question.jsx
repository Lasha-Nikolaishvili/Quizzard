import React from 'react'

export default function Question({questionData, setQuestionNum, setUserAnswers}) {
    const {correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, question} = questionData
    
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
        setUserAnswers((prevUserAnsweres => [...prevUserAnsweres, {userAnswer, correctAnswer}]))

        setQuestionNum(prevNum => prevNum + 1)
    }

    const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer])
   
    return (
        <div>
            <h1 className='question'>{convertHtmlToText(question)}</h1>
            <div className="btn-group">
                <button onClick={() => handleClick(0)} className='btn-group__btn'>{convertHtmlToText(allAnswers[0])}</button>
                <button onClick={() => handleClick(1)} className='btn-group__btn'>{convertHtmlToText(allAnswers[1])}</button>
                <button onClick={() => handleClick(2)} className='btn-group__btn'>{convertHtmlToText(allAnswers[2])}</button>
                <button onClick={() => handleClick(3)} className='btn-group__btn'>{convertHtmlToText(allAnswers[3])}</button>
            </div>
        </div>
    )
}