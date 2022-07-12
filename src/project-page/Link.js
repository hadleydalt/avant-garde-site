import '../App.css'

export const Link = (props) => {
  
  const name = props.name
  
  const randomPlacementStyle = {
    marginTop: Math.floor((Math.random() * 50) + 1), 
    marginLeft: Math.floor((Math.random() * 50) + 1)
  }

  return (
    <div className="link-container">
      <div style={randomPlacementStyle}>
        <img src={require('../graphics/folder.png')} />
        <t>{name}</t>
      </div>
    </div>
  )
}