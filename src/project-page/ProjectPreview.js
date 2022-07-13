import '../App.css'
import { Scissors } from '../graphics/Scissors'

export const ProjectPreview = (props) => {

    const imgPath = props.imgPath

  return (
      <>
      <div className="project-top-border">
          <Scissors />
          <div className="project-dotted-line" />
      </div>
      <div className="project-content">
        <img src={require('../graphics/' + imgPath + '.png')} />
        <p>
          apofkesfklsekdfj IERIDJ kdfjdkf apofkesfklsekdfj kdjfk apofkesfklsekdfj adjfaksdjflkdsjf apofkesfklsekdfj a dkjfkdjf df apofkesfklsekdfj kdfjk dkf a dkf apofkesfklsekdfj
        </p>
    </div>
  </>
  )
}