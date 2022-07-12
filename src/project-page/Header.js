import '../App.css'
import { Links } from './Links'

export const Header = () => {
  return (
    <>
    <div className="header">
      <img className="header-img" src={require('../graphics/header.png')} alt=""/>
      <div className="header-line" />
      <Links />
    </div>
    </>
  )
}