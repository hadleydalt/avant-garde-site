import '../App.css'
import { Header } from './Header'
import { ProjectPreviews } from './ProjectPreviews'

export const ProjectPage = () => {
  return (
      <div className="project-page">
          <Header />
          <ProjectPreviews />
      </div>
  )
}