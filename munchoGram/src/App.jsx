import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomeFeed from './pages/Home/HomeFeed';
import CreatePost from './pages/Create/CreatePost';
import Layout from './routes/Layout/Layout';
import UpdatePost from './pages/Update/UpdatePost';
import ReadPost from './pages/Read/ReadPost';
import AuthModal from './pages/Auth/AuthModal';

function App() {
  const [allPosts, setAllPosts] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [auth, setAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        <Route path='/' element={<Layout setSearchInput={setSearchInput} isLoggedIn={isLoggedIn} />}>
          <Route index element={<AuthModal auth={auth} setAuth={setAuth} setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}/>}/>
          { token ? 
          (
            <Route>
              <Route path='/home' element={<HomeFeed allPosts={allPosts} setAllPosts={setAllPosts} searchInput={searchInput}/>}/>
              <Route path='/createPost' element={<CreatePost />}/>
              <Route path='/editPost/:id' element={<UpdatePost allPosts={allPosts} />}/>
              <Route path='/viewPost/:id' element={<ReadPost allPosts={allPosts}/>}/>
            </Route>
          ): ""}
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
