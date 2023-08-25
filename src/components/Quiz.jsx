import React from 'react'
import Question from './Question'
import QuizResults from './QuizResults'

export default function Quiz({setHasStarted}) {
    const [questionNum, setQuestionNum] = React.useState(0);
    const [quizData, setQuizData] = React.useState([]);
    const [userAnswers, setUserAnswers] = React.useState([]);

    React.useEffect(() => {
        async function fetchQuizData() {
            try {
                const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
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
            return entry?.[i] && questionNum === i && <Question questionData = {entry} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>
        })
    }

    return (
        <div className='quiz-window'>
            {/* {displayQuestions()} */}
            {quizData?.[0] && questionNum === 0 && <Question questionData = {quizData[0]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[1] && questionNum === 1 && <Question questionData = {quizData[1]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[2] && questionNum === 2 && <Question questionData = {quizData[2]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[3] && questionNum === 3 && <Question questionData = {quizData[3]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[4] && questionNum === 4 && <Question questionData = {quizData[4]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {questionNum <= quizData.length-1 && <span className='question-num'>{questionNum + 1} / {quizData.length}</span>}
            {questionNum > quizData.length-1 && <QuizResults userAnswers = {userAnswers} setHasStarted = {setHasStarted} questionsData = {quizData}/>}
        </div>
    )
}