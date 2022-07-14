import '../App.css'

export const Resume = () => {
  return (
    <>
    <div style={{paddingLeft: '5vw', paddingRight: '5vw', marginTop: '5vh', background: '#00C0C9', borderRadius: '10px', padding: '1vw', color: 'white', textTransform: 'uppercase'}}>Click to download</div>
    <img src={require('../graphics/Resume.png')} alt="" style={{width: '70%'}} />
    </>
  )
}