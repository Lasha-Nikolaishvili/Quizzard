import React from 'react'
// import '../dist/style.css'
import WelcomeComp from './components/WelcomeComp'
import Header from './components/Header'


function App() {
  const [hasStarted, setHasStarted] = React.useState(false)

  return (
    <>
      {hasStarted && <Header />}
      <main>
        {!hasStarted && <WelcomeComp />}
      </main>
    </>
  )
}

export default App