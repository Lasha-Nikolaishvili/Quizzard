import React from 'react'
import Header from './components/Header'
import WelcomeComp from './components/WelcomeComp'
import Quiz from './components/Quiz'


function App() {
  const [hasStarted, setHasStarted] = React.useState(false)
  const [apiQueryString, setApiQueryString] = React.useState('https://opentdb.com/api.php?amount=5&type=multiple')

  return (
    <>
      <Header hasStarted={hasStarted} setHasStarted={setHasStarted} setApiQueryString={setApiQueryString}/>
      <main>
        {!hasStarted && <WelcomeComp setHasStarted={setHasStarted}/>}
        {hasStarted && <Quiz setHasStarted={setHasStarted} apiQueryString={apiQueryString}/>}
      </main>
    </>
  )
}

export default App