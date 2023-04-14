import { useState } from 'react';
import './UpdatePost.css'
import { supabase } from '../../Client';
import { useParams } from 'react-router-dom';

export default function UpdatePost({allPosts}){ 
    let {id} = useParams();
    let idNum = parseInt(id);

    const getPost = allPosts.filter((item) => item.id === idNum )[0];

    const [editedPost, setEditedPost] = useState(getPost);

    const handleChange = (e) => {
        setEditedPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.value)
    }

    const updatePost = async(e) => {
        e.preventDefault();
        
        await supabase
            .from('munchies')
            .update({
                title: editedPost.title,
                content: editedPost.content,
                imgUrl: editedPost.imgUrl
            })
            .eq('id', id);
        
        alert('Successfully updated :D');
        window.location = "/";
    }

    return (
        <div className="update-post">
            <h3>Edit Post</h3>
            { editedPost && 
                <form 
                className='update-post-form'
                onSubmit={updatePost}
                >
                    <input 
                        type="text" placeholder='Title'
                        name='title' 
                        value={editedPost.title}
                        onChange={handleChange}
                        required
                    />
                    <textarea  
                        name='content'  
                        value={editedPost.content}    
                        placeholder='Content (Optional)' 
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='imgUrl' 

                        value={editedPost.imgUrl ? editedPost.imgUrl : ""}  
                        placeholder='Image URL (Optional)' 
                        onChange={handleChange}
                    />
                    <button>Edit</button>
                </form>
            }
            
        </div>
    )
}