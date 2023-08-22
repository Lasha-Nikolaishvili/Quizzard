import React from 'react'
import Question from './Question'

export default function Quiz({setHasStarted}) {
    const [questionNum, setQuestionNum] = React.useState(0);
    const [quizData, setQuizData] = React.useState([]);
    const [userAnswers, setUserAnswers] = React.useState([]);

    React.useEffect(() => {
        async function fetchQuizData() {
            try {
                const res = await fetch('https://opentdb.com/api.php?amount=6&type=multiple');
                const json = await res.json()
                setQuizData(json.results)
            } catch (error) {
                console.log(error)
            }
        }

        fetchQuizData();
    }, [])

    function handleQuizEnd(questionNum) {
        let correctCnt = 0

        if(questionNum > 4) {
            correctCnt = userAnswers.reduce((cnt, currAnswer) => {
                if(currAnswer.userAnswer === currAnswer.correctAnswer) cnt++;
            }, 0)
            console.log(correctCnt)    
        }

        return <h1>You got {correctCnt}/5 </h1>
    }

    return (
        <div className='quiz-window'>
            {quizData?.[0] && questionNum === 0 && <Question questionData = {quizData[0]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[1] && questionNum === 1 && <Question questionData = {quizData[1]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[2] && questionNum === 2 && <Question questionData = {quizData[2]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[3] && questionNum === 3 && <Question questionData = {quizData[3]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {quizData?.[4] && questionNum === 4 && <Question questionData = {quizData[4]} setQuestionNum = {setQuestionNum} setUserAnswers = {setUserAnswers}/>}
            {questionNum <= 4 && <span className='question-num'>{questionNum + 1}/5</span>}
            {/* {questionNum > 4 && <h1>You got {correctAnswers} </h1>} */}
            {questionNum > 4 && handleQuizEnd(questionNum)}
        </div>
    )
}