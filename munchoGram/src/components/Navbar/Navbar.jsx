import { Link } from "react-router-dom";
import Search from "./search";
import './Navbar.css'

export default function Navbar({setSearchInput, isLoggedIn}){

    return (
        <nav>
            <h1>munchoGram</h1>
            { isLoggedIn && 
                <>
                    <Search setSearchInput={setSearchInput} />
                    <ul>
                        <Link to='/home'>
                            <li>Home</li>
                        </Link>
                        <Link to='/createPost'>
                            <li>Create New Post</li>
                        </Link>
                        
                    </ul>
                </> 
            }
            
        </nav>
    )
}