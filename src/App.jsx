import { useState } from 'react'
import './App.css'
import NavBar from './components/nav-bar/NavBar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Year2022 from './pages/año2022/Year2022'
import Year2023 from './pages/año2023/Year2023'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'

import ProtectedRoutes from './components/protetecRoutes'
import Admin from './pages/admin/Admin'
import Galeria from './pages/galerias/Galeria'
import Isloading from './components/isLoading/Isloading'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const load = () => {
    setTimeout(() => setIsLoading(false), 2000);

  }
  load();
 

  return (
    <div className="App">

      <HashRouter>
      {isLoading ? <Isloading/> : <NavBar/>}  
     
        {
          isLoading ? <Isloading/> : <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/año2022' element={<Year2022 />} />
          <Route path='/año2023' element={<Year2023 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/galeria' element={<Galeria />} />

          <Route element={<ProtectedRoutes/>} >
            <Route path='/admin' element={<Admin/>} />
          </Route>
        </Routes>
        }
        
        <Footer />
      </HashRouter>


    </div>
  )
}

export default App
