import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Earn from './pages/Earn'
import Friend from './pages/Friend'
import Leader from './pages/Leader'
import Exchange from './pages/Exchange'

function App() {
  return (
    <>
        <div class="bg-base-300">
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/friend" element={<Friend />} />
                <Route path="/leader" element={<Leader />} />
                <Route path="/exchange" element={<Exchange />} />
            </Routes>

        </div>

        <NavBar />
    </>
  )
}

export default App
