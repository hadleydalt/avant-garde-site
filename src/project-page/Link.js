import '../App.css'
import Draggable from 'react-draggable';

export const Link = (props) => {

  const name = props.name

  const initialXPos = Math.floor((Math.random() * 50) + 1)
  const initialYPos = Math.floor((Math.random() * 50) + 1)

  const placementStyle = {
    marginLeft: initialXPos,
    marginTop: initialYPos
  }

  return (
    <div className="link-container">
      <Draggable>
      <div style={placementStyle}>
        <img src={require('../graphics/folder.png')} alt=""/>
        <t>{name}</t>
      </div>
      </Draggable>
    </div>
  )
}