import { Routes, Route } from "react-router-dom"
import Login from "./page/Login"
import Signup from "./page/Signup"

function App() {

  return (
    <>
     <div>
        <section>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
     </div>
    </>
  )
}

export default App
