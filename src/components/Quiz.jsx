import React from 'react'
import Question from './Question'

export default function Quiz({setHasStarted}) {
    // const [questionNum, setQuestionNum] = React.useState(0);
    const [quizData, setQuizData] = React.useState([]);

    React.useEffect(() => {
        async function fetchQuizData() {
            try {
                const res = await fetch('https://opentdb.com/api.php?amount=6&type=multiple');
                const json = await res.json()
                console.log(json.results)
                setQuizData(json.results)
                console.log("quiz data: ", quizData)
            } catch (error) {
                console.log(error)
            }
        }

        fetchQuizData();
    }, [])
    
    React.useEffect(() => {
        console.log("quiz data: ", quizData); 
    }, [quizData]);

    return (
        <div className='quiz-window'>
            <Question questionData={quizData[0]}/>
            <Question questionData={quizData[1]}/>
            <Question questionData={quizData[2]}/>
            <Question questionData={quizData[3]}/>
            <Question questionData={quizData[4]}/>
        </div>
    )
}