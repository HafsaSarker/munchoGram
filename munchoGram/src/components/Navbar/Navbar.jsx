import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <h1>munchoGram</h1>
            <input type='text' placeholder='search' />
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/createPost'>
                    <li>Create New Post</li>
                </Link>
                
            </ul>
        </nav>
    )
}