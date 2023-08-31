import React from 'react'
import Question from './Question'
import QuizResults from './QuizResults'

export default function Quiz({apiQueryString, setHasStarted}) {
    const [questionNum, setQuestionNum] = React.useState(0);
    const [quizData, setQuizData] = React.useState([]);
    const [userAnswers, setUserAnswers] = React.useState([]);

    React.useEffect(() => {
        async function fetchQuizData() {
            try {
                const res = await fetch(apiQueryString);
                const json = await res.json()
                setQuizData(json.results)
            } catch (error) {
                console.log(error)
            }
        }

        fetchQuizData();
    }, [])

    function displayQuestions() {
        return quizData.map((entry, i) => {
            return entry && questionNum === i && <Question key={i} questionData = {entry} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>
        })
    }

    return (
        <div className='quiz-window'>
            {displayQuestions()}
            {questionNum <= quizData.length-1 && <span className='question-num'><span className='curr-num'>{questionNum + 1}</span> / {quizData.length}</span>}
            {questionNum > quizData.length-1 && <QuizResults userAnswers = {userAnswers} setHasStarted = {setHasStarted} questionsData = {quizData}/>}
        </div>
    )
}