import { useState, useEffect } from 'react'
import { supabase } from './Client';
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomeFeed from './pages/Home/HomeFeed';
import CreatePost from './pages/Create/CreatePost';
import Layout from './routes/Layout/Layout';
import UpdatePost from './pages/Update/UpdatePost';
import ReadPost from './pages/Read/ReadPost';
import LogIn from './pages/Auth/LogIn';
import UserAcc from './pages/User/UserAcc';
import AuthModal from './pages/Auth/AuthModal';

function App() {
  const [allPosts, setAllPosts] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout setSearchInput={setSearchInput}  token={token}/>}>
          <Route index element={<LogIn 
          setToken={setToken}/>}/>
          <Route path='/signup' element={<AuthModal />} />
          <Route path='/home' element={<HomeFeed allPosts={allPosts} setAllPosts={setAllPosts} searchInput={searchInput} />}/>
          <Route path='/createPost' element={<CreatePost token={token}/>}/>
          <Route path='/editPost/:id' element={<UpdatePost allPosts={allPosts} />}/>
          <Route path='/viewPost/:id' element={<ReadPost allPosts={allPosts} token={token} />}/>
          <Route path='/user/:uid' element={<UserAcc token={token}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
