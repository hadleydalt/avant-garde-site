import './App.css';
import { Header } from './main/Header'
import Main from './main/Main'

function App() {
  return (
    <>
    <img className="paper-bg" src={require('./graphics/light texture.png')}></img>
    <div className="wrapper">
      <img className="paint-bg-1" src={require('./graphics/paint-bg3.png')}></img>
      <img className="paint-bg-2" src={require('./graphics/paint-bg2.png')}></img>
      <div className="content-wrapper">
          <Header />
          <Main />
      </div>
      <div className="cat-gif">
        <img className="cat-gif-bubble" src={require('./graphics/pixelspeechbubble.png')}></img>
        <img className="cat-gif-cat" src={require('./graphics/cat.gif')}></img>
        <t>I design and build websites! If you are interested in a creative commission please contact me at <b><i>hadley_dalton@brown.edu</i></b>.</t>
      </div>
    </div>
    </>
  )
}

export default App;
