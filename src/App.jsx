import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResendVerificationEmail from "./pages/ResendVerification"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import Dashboard from "./pages/Dashboard"
import AdminDashboard from "./pages/AdminDashboard"


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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App
