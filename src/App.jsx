import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav-bar/NavBar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Year2022 from './components/año2022/Year2022'
import Year2023 from './components/año2023/Year2023'
import Galeria from './components/galeria/Galeria'
import Eventos from './components/eventos/Eventos'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/año2022' element={<Year2022/>} />
          <Route path='/año2023' element={<Year2023/>} />
          <Route path='/galeria' element={<Galeria/>} />
          <Route path='/eventos' element={<Eventos/>} />
        </Routes>
        <Footer/>
      </HashRouter>
      
     
    </div>
  )
}

export default App
