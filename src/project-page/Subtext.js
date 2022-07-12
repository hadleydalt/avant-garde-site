import '../App.css'

export const Subtext = (props) => {

    const topText = props.topText
    const bottomText = props.bottomText
    const color = props.color

  return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '18vw', height: '6vh'}}>
          <div style={{height: '100%', width: '0.5vw', background: color}} />
          <div style={{paddingLeft: '15px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', fontStyle: 'italic', width: '15vw'}}>
              <div>{topText}</div>
              <div style={{fontWeight: 'bold'}}>{bottomText}</div>
          </div>
      </div>
  )
}