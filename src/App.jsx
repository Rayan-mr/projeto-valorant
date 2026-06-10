import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Agentes from './Pages/Agentes'

function App() {
 return(
  <BrowserRouter>
    <Routes>
      <Route path='/projeto-valorant/' element={<Home/>}/>

      <Route
          path="/projeto-valorant/:id"
          element={<Agentes />}
        />
    </Routes>
  </BrowserRouter>
 )
}

export default App
