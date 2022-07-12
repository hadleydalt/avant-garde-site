import '../App.css'
import { Link } from './Link'

export const Links = () => {

  return (
      <div className="links-container">
          <Link name="Projects" />
          <Link name="About" />
          <Link name="Resume" />
      </div>
  )
}