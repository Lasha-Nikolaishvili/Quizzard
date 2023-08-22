import React from 'react'

export default function Question({questionData}) {
    const {correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, question} = questionData
    
    function convertHtmlToText(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }

    const allAnswers = shuffleArray([...incorrectAnswers, correctAnswer])
   
    return (
        <div>
            <p className='question'>{convertHtmlToText(question)}</p>
            <div className="btn-group">
                <button className='btn-group__btn'>{convertHtmlToText(allAnswers[0])}</button>
                <button className='btn-group__btn'>{convertHtmlToText(allAnswers[1])}</button>
                <button className='btn-group__btn'>{convertHtmlToText(allAnswers[2])}</button>
                <button className='btn-group__btn'>{convertHtmlToText(allAnswers[3])}</button>
            </div>
        </div>
    )
}