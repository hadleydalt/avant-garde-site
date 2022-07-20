import '../App.css'
import { Scissors } from '../graphics/Scissors'
import { Tool } from '../graphics/Tool'

export const ProjectPreview = (props) => {

    const imgPath = props.imgPath
    const tags = props.tags
    const text = props.text
    const title = props.title

  return (
      <>
      <div className="spacer" />
      <div className="project-top-border">
          <Scissors />
          <div className="project-dotted-line" />
      </div>
      <div className="project-content">
        <img src={require('../graphics/' + imgPath + '.png')} />
        <p>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'auto'}}>
        <Tool />
            <h2>
            {tags.map((tag, index) => 
                index === 0 ? tag : " ◯ " + tag
            )}
            </h2>
            </div>
            <h1>{title}</h1>
          <t>{text}</t>
        </p>
        <a>
        <img src={require('../graphics/learnmorestroke.png')} alt=""/>
        <c>Learn more ➺</c>
        </a>
    </div>
  </>
  )
}