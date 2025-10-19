import React from 'react'
import './App.css'
import Home from './pages/home/home'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Signup from './pages/signuppage/signup'
import Detail from './pages/detail/detail'
import Profile from './pages/profilepage/profile'
import Signin from './pages/signin/signin'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/signin' element={<Signup/>}/>
    <Route path='/signup' element={<Signin/>}/>
    <Route path="/movie/:id" element={<Detail />} />
    <Route path='/profile' element={<Profile/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
