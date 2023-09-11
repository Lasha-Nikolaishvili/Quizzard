import anime from 'animejs';
import React from 'react'
import Question from './Question'
import QuizResults from './QuizResults'
import Loading from './Loading'

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

    React.useEffect(() => {

    })

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