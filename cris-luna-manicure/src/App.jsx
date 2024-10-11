import Header from './components/Header'
import CrisLuna from './components/CrisLuna'
import Carrossel from './components/Carrossel'
import imagens from './components/ArrayImagens'
import BemVinda from './components/BemVinda'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header/>
      <CrisLuna/>
      <BemVinda/>
      <Carrossel arrayImages={imagens}/>
    </>
  )
}

export default App
