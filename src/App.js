import './App.css';
import { Header } from './main/Header'
import Main from './main/Main'

function App() {
  return (
    <div className="wrapper">
      <img className="paint-bg-1" src={require('./graphics/paint-bg3.png')}></img>
      <img className="paint-bg-2" src={require('./graphics/paint-bg2.png')}></img>
      <div className="content-wrapper">
          <Header />
          <Main />
      </div>
    </div>
  )
}

export default App;
