import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Servicios from './components/Servicios'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Servicios' element={<Servicios/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
