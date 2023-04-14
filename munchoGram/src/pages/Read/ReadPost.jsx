import './ReadPost.css'
import { BsArrowReturnRight } from 'react-icons/bs'
import moment from 'moment';
import PostStats from '../../components/PostStats/PostStats';
import { useParams } from 'react-router-dom';

export default function ReadPost({allPosts}){
    let {id} = useParams();
    let idNum = parseInt(id);

    const getPost = allPosts.filter((item) => item.id === idNum )[0];

    const createdAgo = moment(new Date(getPost.created_at)).fromNow();

    
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
                     <PostStats 
                        upvotes={getPost.upvotes}
                        id={id}
                        post_key={getPost.user_key}
                     />
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