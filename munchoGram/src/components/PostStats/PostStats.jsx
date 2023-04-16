import './PostStats.css'
import { supabase } from '../../Client';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function PostStats({upvotes, id, post_key}) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const updateLikes = () =>{
        setLiked(true);
        setLikes(prev => prev+1);
    }

    const handleDelete = () => {
        let user_key = prompt('Enter secret key to delete your post')

        let i = 0;
        while(i < 3)
        {   
            if(user_key === null){
                break;
            }
            else if(user_key !== post_key){
                user_key = prompt('Wrong key, try again'); 
            }
            else{
                deletePost();
                break;
            }
            i++;
        }    

        if(i == 3 && user_key === post_key) {
            deletePost();
        }else if(i == 3 && user_key !== null){
            alert('You have exceeded the allowed number of attempts :(')
        }
    }

    const deletePost = async() => {
        await supabase
            .from('munchies')
            .delete()
            .eq('id', id);
        alert('Post deleted!');
        window.location='/';
    }

    return (
        <div className="post-stats">
            <p className='upvotes'>
                <span 
                    className='icon'
                    onClick={updateLikes}
                >
                    {liked ? <AiFillHeart/> :  <AiOutlineHeart/>}
                </span>{likes}
            </p>

            <div className="update-icons">
                <Link to={'/editPost/' + id}>
                    <span className="icon">
                        <MdOutlineEdit/>
                    </span>
                </Link>
     
                <span 
                    className="icon" 
                    onClick={handleDelete}
                >
                    <MdDeleteOutline/>
                </span>
            </div>
        </div>
    )
}