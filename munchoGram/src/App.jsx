import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomeFeed from './pages/Home/HomeFeed';
import CreatePost from './pages/Create/CreatePost';
import Layout from './routes/Layout/Layout';
import UpdatePost from './pages/Update/UpdatePost';
import ReadPost from './pages/Read/ReadPost';

function App() {
  const [allPosts, setAllPosts] = useState(null);

  //console.log(allPosts)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeFeed allPosts={allPosts} setAllPosts={setAllPosts}/>}/>
          <Route path='/createPost' element={<CreatePost />}/>
          <Route path='/editPost/:id' element={<UpdatePost allPosts={allPosts} />}/>
          <Route path='/viewPost/:id' element={<ReadPost allPosts={allPosts}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
