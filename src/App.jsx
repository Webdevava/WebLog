import React from 'react'
import './App.css'
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './NavBar'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/articles' element={<ArticlesListPage/>}/>
    <Route path='/articles/:articleId' element={<ArticlePage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
