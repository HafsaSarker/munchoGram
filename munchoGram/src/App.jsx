import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomeFeed from './pages/Home/HomeFeed';
import CreatePost from './pages/Create/CreatePost';
import Layout from './routes/Layout/Layout';
import UpdatePost from './pages/Update/UpdatePost';
import ReadPost from './pages/Read/ReadPost';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeFeed />}/>
          <Route path='/createPost' element={<CreatePost />}/>
          <Route path='/editPost' element={<UpdatePost />}/>
          <Route path='viewPost' element={<ReadPost />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
