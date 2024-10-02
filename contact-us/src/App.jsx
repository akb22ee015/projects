import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="nav">
        <ul>Home</ul>
        <ul>Contact</ul>
        <ul>About</ul>
      </div>
    </div>
  )
}

export default App
