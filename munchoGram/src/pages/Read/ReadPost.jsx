import './ReadPost.css'
import { supabase } from '../../Client';
import { BsArrowReturnRight } from 'react-icons/bs'
import moment from 'moment';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function ReadPost({allPosts}){
    let {id} = useParams();
    let idNum = parseInt(id);

    const getPost = allPosts.filter((item) => item.id === idNum )[0];

    const createdAgo = moment(new Date(getPost.created_at)).fromNow();

    const handleDelete = () => {
        let user_key = prompt('Enter secret key to delete your post')
        
        while(user_key !== getPost.user_key)
        {
            user_key = prompt('Wrong key, try again');
        }

        if(user_key === getPost.user_key){
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
        <>
            { getPost && 
                <div className="view-post">
                <div className="post-container">
                     <p>Posted {createdAgo}</p>
                     <h4>{getPost.title} </h4>
                     <p>{getPost.content}</p>
     
                     { getPost.imgUrl ? 
                     (
                         <img className='post-img' src={getPost.imgUrl}/>
                     )
                     :
                     null }
                     
                     <div className="post-stats">
                         <p className='upvotes'><span className='icon'><AiOutlineHeart/></span>{getPost.upvotes}</p>
                         <div className="update-icons">
                             <Link to={'/editPost/' + id}>
                                 <span className="icon">
                                     <MdOutlineEdit/>
                                 </span>
                             </Link>
     
                             <span className="icon" onClick={handleDelete}><MdDeleteOutline/></span>
                         </div>
                     </div>
                     <div className="comments-container">
                         <p>
                             <span className='icon'>
                                 <BsArrowReturnRight/>
                             </span>
                             omg! How did you make that?
                         </p>
                         <p>
                             <span className='icon'>
                                 <BsArrowReturnRight/>
                             </span>
                             watching this at 3am is not a good feeling
                         </p>
                         <input type="text" placeholder='Leave a comment'/>
                     </div>
                 </div>
                 
             </div>   
            }
        </>
       
        
    )
}