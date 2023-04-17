import { useState } from 'react'
import { supabase } from '../../Client';
import './CreatePost.css'

export default function CreatePost(){
    const [newPost, setNewPost] = useState({
        title: "",
        content: null,
        url: null,
        user_key: null
    });
    const handleChange = (e) => {
        setNewPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const createPost = async (e) => {
        e.preventDefault();

        await supabase
            .from('munchies')
            .insert({
                title: newPost.title,
                content: newPost.content,
                imgUrl: newPost.url,
                user_key: newPost.user_key,
            })
            .select();
        alert('Post created!');        
        window.location='/';
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
                <input 
                    type='text' 
                    placeholder='Secret key' 
                    name='user_key'
                    onChange={handleChange}
                    required
                />
                <button>Create</button>
            </form>
        </div>
    )
}