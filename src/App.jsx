import './App.css'
import Home from './components/Home/Home'
import {useState,useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/pages/Welcome/Welcome'
import axios from 'axios'
import ForgotPassword from './components/pages/forgot-password/Forgot-Password'
import Confirmation from './components/pages/Confirmation'


function App() {
  const [news,setNews] = useState()
 const [loading,setIsLoading] = useState(false)
 const hosted_link = 'student-dashboard-tau.vercel.app/'

  // Additional features to be added 

// API for getting news headings on a page's section === 6674f85c9d3340868df7433236e92beb
// Adding the news feature
// Pictures section that links to lms vidoes 
// Teachers
// Altschool png images for the RightSide Component
// Footer
// Adding Videos
// Todo list
//  Resources
// Classes scheduler
// Student ID
// npm install vue clone

const news_api =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=6674f85c9d3340868df7433236e92beb'

//  useEffect(()=>{
//   setIsLoading(true)
//     let res = axios.get(news_api).then(response => setNews(response.data))
//     setIsLoading(false)
//     console.log(news);
//  },[])

  return (
    <div className="App ">
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/home/*' element={<Home />} />
            <Route path='/new_pwd' element={<ForgotPassword />} />
            <Route path='/confirmation' element={<Confirmation />} />
        </Routes>

    </div>
  )
}

export default App
