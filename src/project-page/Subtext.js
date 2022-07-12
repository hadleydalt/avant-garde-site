import '../App.css'

export const Subtext = (props) => {

    const topText = props.topText
    const bottomText = props.bottomText
    const color = props.color

  return (
      <div className="subtext-inner-wrapper">
          <div className="subtext-accent" style={{background: color}} />
          <div className="subtext-text">
              <div>{topText}</div>
              <b>{bottomText}</b>
          </div>
      </div>
  )
}