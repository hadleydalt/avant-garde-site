import '../App.css'
import { Arrow } from '../graphics/Arrow'

export const About = () => {
  return (
    <>
    <div className="spacer" />
    <div className="page-title">
      Hi,
      <x>I'm</x>
      <y>Hadley</y>
    </div>
    <div className="about">
      <img src={require("../graphics/about me.png")} alt="" style={{width: '40vw', height: '22vh'}} />
      <div className="about-image-container">
        <img src={require("../graphics/get in touch.png")} alt="" style={{width: '30vw'}}/>
        <tc>
        <t>
          <Arrow />
          <d><u>hadley_dalton@brown.edu</u> </d>
        </t>
        <t>
          <Arrow />
          <d>Resume </d>
        </t>
        <t>
          <Arrow />
          <d>LinkedIn </d>
        </t>
        <t>
          <Arrow />
          <d>Fine Art </d>
        </t>
        </tc>
      </div>
    </div>
  </>
  )
}