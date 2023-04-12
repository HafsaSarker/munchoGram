import './Navbar.css'

export default function Navbar(){
    return (
        <nav>
            <h1>munchoGram</h1>
            <input type='text' placeholder='search' />
            <ul>
                <li>Home</li>
                <li>Create New Post</li>
            </ul>
        </nav>
    )
}