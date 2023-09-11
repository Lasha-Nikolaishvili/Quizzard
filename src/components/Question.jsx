import React from 'react'
import anime from 'animejs'

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

    React.useEffect(() => {
        anime({
            targets: '.question, .btn-group__btn, .question-num',
            opacity: 1,
            easing: 'easeInQuart',
            delay: anime.stagger(100),
            duration: 200
        });

        const optionBtns = document.querySelectorAll('.btn-group__btn')

        optionBtns.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                anime({
                    targets: el,
                    translateY: -5,
                })
            })
        })

        optionBtns.forEach((el) => {
            el.addEventListener('mouseleave', () => {
                anime({
                    targets: el,
                    translateY: 0,
                })
            })
        })

        return () => {
            anime.remove('.question, .btn-group__btn, .question-num')
            anime.remove(optionBtns)
        }
    }, [])

    return (
        <div>
            <h1 className='question'>{convertHtmlToText(question)}</h1>
            <div className="btn-group">
                {displayAnswers()}
            </div>
        </div>
    )
}