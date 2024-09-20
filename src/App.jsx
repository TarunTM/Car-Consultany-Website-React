import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CarPage from "./pages/CarPage"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Car/:id" element={<CarPage/>} />
      </Routes>
    </>
  )
}

export default App
