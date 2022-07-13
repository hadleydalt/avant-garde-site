import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { ProjectPreviews } from '../project-page/ProjectPreviews'
import { About } from '../about-page/About'

function Main() {
  return (
    <Routes>
        <Route path='/' element={<ProjectPreviews />} />
        <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Main;