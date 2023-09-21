import React from 'react'
import anime from 'animejs'

export default function Question({questionData, setQuestionNum, setUserAnswers}) {
    const {correctAnswer, allAnswers, question} = questionData

    function handleClick(answerIndex) {
        const userAnswer = allAnswers[answerIndex]
        setUserAnswers((prevUserAnswers => [...prevUserAnswers, {userAnswer: userAnswer, correctAnswer:correctAnswer}]))
        setQuestionNum(prevNum => prevNum + 1)
    }

    const answers = 
        allAnswers.map((answer, i) => (
            <button 
                key={i} 
                onClick={() => handleClick(i)} 
                className='btn-group__btn' >
                {answer}
            </button>
        ))

    React.useEffect(() => {
        anime({
            targets: '.question, .btn-group__btn, .question-num',
            opacity: 1,
            easing: 'easeInQuart',
            delay: anime.stagger(100),
            duration: 200
        });

        return () => {
            anime.remove('.question, .btn-group__btn, .question-num')
        }
    }, [])

    return (
        <div>
            <h1 className='question'>{question}</h1>
            <div className="btn-group">{answers}</div>
        </div>
    )
}