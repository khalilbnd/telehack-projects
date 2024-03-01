// import shape from './assets/Vector 1.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import woman from'./assets/Vector3.png'
import Navbar2 from './components/Navbar2'
import OfferCard from './components/OfferCard'
import idoom from './assets/idoomFix.png'
import LoginForm from './components/Form'
import Hero from './components/Hero';
// import PersonalLandline from './components/Personal/Landline';
// import PersonalInternet from "./components/Personal/Internet";
// import BusinessInternet from "./components/Business/Internet";
// import BusinessLandline from "./components/Business/Landline";
import SignUpForm from './components/SignUpForm'

function App() {


  return (
    <>
    <Router>
        <Routes>
        <Route exact path="/" element={<Hero />}></Route>
        <Route path="/loginForm" element={<LoginForm />}></Route>
        <Route path="/SignUpForm" element={<SignUpForm />}></Route>
                
            
        </Routes>  
    </Router>
    </>
  )
}

export default App
