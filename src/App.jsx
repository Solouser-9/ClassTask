import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Forget from "./Pages/ForgetPassword"
import SetNew from "./Pages/SetNewPassword"
import Verify from "./Pages/VerifyCode"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/forget' element = {<Forget/>}/>
        <Route path='/new' element = {<SetNew/>}/>
        <Route path='/verify' element = {<Verify/>}/>
      </Routes>
    </Router>
  )
}

export default App
