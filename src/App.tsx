
import './index.css'
import Intro from './component/Intro'
import Nav from './component/Nav'

import Projects from './component/Projects'
import Skill from './component/Skill'
import Footer from './component/Footer'

function App() {


  return (
    <div className=' bg-gray-300  '>
      <Nav/>
      <div className="overflow-x-hidden">

     <Intro />
     <Skill />
     <Projects/>
     <Footer/>
      </div>
    </div>
  )
}

export default App
