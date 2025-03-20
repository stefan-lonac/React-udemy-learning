import CoreConcepts from './components/core-concept/CoreConcepts.jsx'
import Examples from './components/examples/examples.jsx'
import Header from './components/header/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App
