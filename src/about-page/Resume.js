import '../App.css'

export const Resume = () => {
  return (
    <>
    <div className="spacer" />
    <div className="page-title">
      Resume
      <x>Resume</x>
      <y>Resume</y>
    </div>
    ❝✎➸ Please contact me if you would like a downloadable copy!
    <div className="spacer" />
    <img src={require('../graphics/Resume.png')} alt="" style={{width: '70%', alignSelf: 'flex-start', marginLeft: '8vw'}} />
    </>
  )
}