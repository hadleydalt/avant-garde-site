import '../App.css'
import { Links } from '../project-page/Links'
import { Subtext } from './Subtext'

export const Header = () => {
  return (
    <>
    <div className="header-top">
      <img className="header-img" src={require('../graphics/header.png')} alt=""/>
      <div className="header-line" />
      <Links />
    </div>
    <div className="subtext-wrapper">
      <Subtext color="#FF8608" topText="Student of the" bottomText="Brown | RISD Dual Degree Program" />
      <Subtext color="#00C0C9" topText="Studying" bottomText="Computer Science and Digital Art and Design" />
      <Subtext color="#AB0068" topText="Passionate about" bottomText="Exploring how code impacts the way we live!" />
    </div>
    </>
  )
}