import { lazy, Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArticlesProps } from './components/types/article.type'
import Loading from './shared/components/Loading'
// import Articles from './components/Articles'

const ArticlesLazy = lazy(() => delayForDemo(import('./components/Articles')))

function App({ articles }: ArticlesProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component updated or mounted")

    return (() => {
      console.log("Component unmounted")
    })
  }, [count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Suspense fallback={<Loading />}>
        <ArticlesLazy articles={articles}/>

      </Suspense>
    </>
  )
}

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App
