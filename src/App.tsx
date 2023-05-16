import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './component/Intro'
import Nav from './component/Nav'

import Projects from './component/Projects'
import Skill from './component/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Intro/>
     <Skill/>
     <Projects/>
    </>
  )
}

export default App
