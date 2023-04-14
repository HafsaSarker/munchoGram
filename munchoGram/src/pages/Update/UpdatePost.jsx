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

    const handleSubmit = (e) => {
        e.preventDefault();

        let user_key = prompt('Enter secret key to update your post')
        
        while(user_key !== editedPost.user_key)
        {
            user_key = prompt('Wrong key, try again');
        }

        if(user_key === editedPost.user_key){
            updatePost(e);
        }
    }

    const updatePost = async(e) => {
        await supabase
            .from('munchies')
            .update({
                title: editedPost.title,
                content: editedPost.content,
                imgUrl: editedPost.imgUrl,
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
                onSubmit={handleSubmit}
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