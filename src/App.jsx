import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResendVerificationEmail from "./pages/ResendVerification"


function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/resend-verification"
          element={<ResendVerificationEmail />}
        />
      </Routes>
    </div>
  )
}

export default App
