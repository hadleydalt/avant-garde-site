import './App.css';
import { ProjectPreviews } from './project-page/ProjectPreviews'
import { Header } from './project-page/Header'

function App() {
  return (
    <div className="wrapper">
          <Header />
          <ProjectPreviews />
      </div>
  )
}

export default App;
