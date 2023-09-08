import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePage from './pages/CreatePage.jsx'
import EditPage from './pages/EditPage.jsx'
import Navbar from './components/Navbar'
import ReadMorePage from './pages/ReadMorePage'

const App = () => {
    const [ArticleData, setArticleData] = useState([]);

  return (
    <Router>
    <Routes>
    <Route exact path="/">
        <LandingPage ArticleData={ArticleData} setArticleData={setArticleData} />
    </Route>
    <Route path="/createPage">
        <CreatePage />
    </Route>
    <Route path="/editPage">
        <EditPage />
    </Route>
    <Route path="/readMorePage">
        <ReadMorePage ArticleData={ArticleData} />
    </Route>
    </Routes>
</Router>
)
}

export default App






