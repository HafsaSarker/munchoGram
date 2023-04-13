import { useState } from 'react'
import './CreatePost.css'

export default function CreatePost(){
    const [newPost, setNewPost] = useState({
        title: "",
        content: null,
        url: null
    });
    const handleChange = (e) => {
        setNewPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const createPost = (e) => {
        e.preventDefault();

        console.log(newPost);
    }
    return (
        <div className="create-post">
            <h3>Create Post</h3>
            <form className='create-post-form' onSubmit={createPost}>
                <input 
                    type="text" 
                    name='title'
                    placeholder='Title'
                    onChange={handleChange} 
                    required
                />
                <textarea 
                    placeholder='Content (Optional)'
                    name='content'
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    placeholder='Image URL (Optional)' 
                    name='url'
                    onChange={handleChange}
                    />
                <button>Create</button>
            </form>
        </div>
    )
}