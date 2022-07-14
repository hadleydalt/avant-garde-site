import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { ProjectPreviews } from '../project-page/ProjectPreviews'
import { About } from '../about-page/About'
import { Resume } from '../about-page/Resume'

function Main() {
  return (
    <Routes>
        <Route path='/' element={<ProjectPreviews />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
    </Routes>
  )
}

export default Main;