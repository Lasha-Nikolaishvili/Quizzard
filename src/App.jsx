import React from 'react'
import Header from './components/Header'
import WelcomeComp from './components/WelcomeComp'
import Quiz from './components/Quiz'


function App() {
  const [hasStarted, setHasStarted] = React.useState(false)

  return (
    <>
      {hasStarted && <Header setHasStarted={setHasStarted}/>}
      <main>
        {!hasStarted && <WelcomeComp setHasStarted={setHasStarted}/>}
        {hasStarted && <Quiz setHasStarted={setHasStarted}/>}
      </main>
    </>
  )
}

export default App