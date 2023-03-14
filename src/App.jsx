import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './sections/Main'
import Knowledges from './sections/Knowledges'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='row gap-4'>
        <Main />
        <Knowledges />
      </div>
    </div>
  )
}

export default App
