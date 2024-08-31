    import React from 'react'
    import CustomNavbar from './components/CustomNavbar'
    import Fetch from './Pages/Fetch'
    import   Home from './Pages/Home'
    import './App.css';
    import {Route, Routes} from 'react-router-dom'
    import User from './Pages/User'
    import Contact from './Pages/Contact';
  




 const App=()=>{
  return(
    <div>
       <CustomNavbar/>

       <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/fetch' element={<Fetch/>}   />
        <Route path='/user' element={<User/>}/>
       
        <Route path='/contact' element={<Contact/>}/>
       </Routes>

       
    </div>
    
  )
 }

 export default App;