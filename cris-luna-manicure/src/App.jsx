import Header from './components/Header/Header'
import CrisLuna from './components/CrisLuna/CrisLuna'
import Carrossel from './components/Carrossel/Carrossel'
import imagens from './components/ArrayImagens'
import BemVinda from './components/BemVinda/BemVinda'
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
