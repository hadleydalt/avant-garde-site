import '../App.css'
import { FolderLink } from './FolderLink'
import { Link } from 'react-router-dom'

export const FolderLinks = () => {

  return (
      <div className="links-container">
        <Link to='/' className="folder-link">
          <FolderLink name="Projects" />
        </Link>
        <Link to='/about' className="folder-link">
          <FolderLink name="About" />
        </Link>
        <Link to='/resume' className="folder-link">
          <FolderLink name="Resume" />
        </Link>
      </div>
  )
}