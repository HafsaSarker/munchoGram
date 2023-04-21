import { useState } from 'react'
import eatingPanda from '../../../public/eat.png'
import { supabase } from '../../Client';
import './CreatePost.css'

export default function CreatePost(){
    const [newPost, setNewPost] = useState({
        title: "",
        content: null,
        url: null,
        user_key: null,
        flag: "opinion"
    });
    
    const handleChange = (e) => {
        setNewPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const createPost = async (e) => {
        e.preventDefault();
        const quesFlag = newPost.flag === "question" ? true : false;
        console.log(quesFlag)
        await supabase
            .from('munchies')
            .insert({
                title: newPost.title,
                content: newPost.content,
                imgUrl: newPost.url,
                user_key: newPost.user_key,
                flag: newPost.flag,
                isQuestion: quesFlag
            })
            .select();
        alert('Post created!');        
        window.location='/';
    }
    return (
        <>
            <img className='create-img' src={eatingPanda} />
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

                    <div className="flag">
                        <h4>Post type</h4>
                        <div className="flag-input">
                            <label>
                                <input 
                                    type="radio" 
                                    name="flag" 
                                    value="opinion"
                                    checked={newPost.flag === "opinion"}
                                    onChange={handleChange}
                                />
                                Opinion
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="flag"
                                    value="question" 
                                    checked={newPost.flag === "question"}
                                    onChange={handleChange}
                                />
                                Question
                            </label>
                        </div>   
                    </div>

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
        </>
        
    )
}