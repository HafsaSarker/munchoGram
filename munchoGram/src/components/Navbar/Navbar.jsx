import { Link } from "react-router-dom";
import Search from "./search";
import { MdAccountCircle } from 'react-icons/md'
import './Navbar.css'

export default function Navbar({setSearchInput, token}){
    let uid = token && token.user.identities[0].id;
    return (
        <nav>
            <h1>munchoGram</h1>
            { token ? 
                <>
                    <Search setSearchInput={setSearchInput} />
                    <ul>
                        <Link to='/home'>
                            <li>Home</li>
                        </Link>
                        <Link to='/createPost'>
                            <li>Create New Post</li>
                        </Link>
                        <Link to={'/user/' + uid}>
                            <li><span className="user-icon"><MdAccountCircle /></span></li>
                        </Link>
                    </ul>
                </>
                : 
                <Link to="/">
                    <button className="nav-btn">Sign Up/Log In</button> 
                </Link>                
            }
            
        </nav>
    )
}