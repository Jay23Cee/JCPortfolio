import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Intro from './component/Intro'
import Nav from './component/Nav'

import Projects from './component/Projects'
import Skill from './component/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-blue-00'>
    <Nav/>
     <Intro/>
     <Skill/>
     <Projects/>
    </div>
  )
}

export default App
