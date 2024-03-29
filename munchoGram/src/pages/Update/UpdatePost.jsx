import { useState } from 'react';
import './UpdatePost.css'
import sleepyPanda from '../../../public/sleep.png'
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
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let user_key = prompt('Enter secret key to update your post')
        
        let i = 0;
        while(i < 3)
        {   
            if(user_key === null){
                break;
            }
            else if(user_key !== editedPost.user_key){
                user_key = prompt('Wrong key, try again'); 
            }
            else{
                updatePost(e);
                break;
            }
            i++;
        }    

        if(i == 3 && user_key === editedPost.user_key) {
            updatePost(e);
        }else if(i == 3 && user_key !== null){
            alert('You have exceeded the allowed number of attempts :(')
        }  
        
    }

    const updatePost = async(e) => {
        const quesFlag = editedPost.flag === "question" ? true : false;

        await supabase
            .from('munchies')
            .update({
                title: editedPost.title,
                content: editedPost.content,
                imgUrl: editedPost.imgUrl,
                edited: new Date().toISOString(),
                flag: editedPost.flag,
                isQuestion: quesFlag
            })
            .eq('id', id);
        
        alert('Successfully updated :D');
        
        window.location = "/home";
    }

    const cancelEdit = () => {
        history.back();
    }

    return (
        <>
            <img className='update-img' src={sleepyPanda}/>
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
                            value={editedPost.content === null ? "" : editedPost.content}    
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

                        <div className="flag">
                            <h4>Post type</h4>
                            <div className="flag-input">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="flag" 
                                        value="opinion"
                                        checked={editedPost.flag === "opinion"}
                                        onChange={handleChange}
                                    />
                                    Opinion
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="flag"
                                        value="question" 
                                        checked={editedPost.flag === "question"}
                                        onChange={handleChange}
                                    />
                                    Question
                                </label>
                            </div>   
                        </div>

                        <div className="btn-container">
                            <button>Edit</button>
                            <button type='button'
                            onClick={cancelEdit}>Cancel</button>
                        </div>
                        
                    </form>
                }
                
            </div>
        </>
    )
}