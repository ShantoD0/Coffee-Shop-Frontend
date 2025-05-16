import { Outlet } from "react-router"
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"

function App() {
  return (
    <>
      <main>
        <Navbar/>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App