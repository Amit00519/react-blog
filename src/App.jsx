import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Hello React</h1>
      <h1>Code step by step</h1>
      <Header/>

    </div>
        
    </>
  )
}

export default App
