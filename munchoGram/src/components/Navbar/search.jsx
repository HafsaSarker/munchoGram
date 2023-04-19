import './Search.css'

export default function Search({ setSearchInput}){

    const searchPosts = (input) => {
        setSearchInput(input);
        
    }

    return (
        <div className="search">
            <input 
                type='text' placeholder='search by title or user' 
                onChange={(e) => searchPosts(e.target.value)}
            />
        </div>
    )
}