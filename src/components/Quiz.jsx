import React from 'react'
import Question from './Question'
import QuizResults from './QuizResults'
import Loading from './Loading'

export default function Quiz({apiQueryString, setHasStarted}) {
    const [questionNum, setQuestionNum] = React.useState(0)
    const [quizData, setQuizData] = React.useState([])
    const [userAnswers, setUserAnswers] = React.useState([])

    function shuffleArray(array) {
        return array.slice().sort(() => Math.random() - 0.5)
    }

    function convertHtmlToText(html) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        return doc.body.textContent || "";
    }

    function formatData(data) {
        return data.map((obj) => {
            return {
                question: convertHtmlToText(obj.question),
                correctAnswer: convertHtmlToText(obj.correct_answer),
                allAnswers: shuffleArray([...obj.incorrect_answers.map((ans => convertHtmlToText(ans))), obj.correct_answer])
            }
        })
    }
    
    React.useEffect(() => {
        async function fetchQuizData() {
            try {
                const res = await fetch(apiQueryString)
                const json = await res.json()
                setQuizData(formatData(json.results))
            } catch (error) {
                console.log(error)
            }
        }

        fetchQuizData();
    }, [])

    function displayQuiz() {
        
       return  <>
            {quizData.map((entry, i) => {
                return entry && questionNum === i && <Question key={i} questionData = {entry} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>
            })}
            {questionNum <= quizData.length-1 && <span className='question-num'><span className='curr-num'>{questionNum + 1}</span> / {quizData.length}</span>}
        </>
    }

    return (
        <div className='quiz-window'>
            {quizData.length !== 0 ? displayQuiz() : <Loading />}
            {quizData.length !== 0 && questionNum > quizData.length-1 && <QuizResults userAnswers = {userAnswers} setHasStarted = {setHasStarted} questionsData = {quizData}/>}
        </div>
    )
}