import './PostStats.css'
import { supabase } from '../../Client';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function PostStats({upvotes, id, post_key}) {
    const handleDelete = () => {
        let user_key = prompt('Enter secret key to delete your post')
        
        while(user_key !== post_key)
        {
            user_key = prompt('Wrong key, try again');
        }

        if(user_key === post_key){
            deletePost();
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
            <p className='upvotes'><span className='icon'><AiOutlineHeart/></span>{upvotes}</p>

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