import './ReadPost.css'
import moment from 'moment';
import PostStats from '../../components/PostStats/PostStats';
import PostComments from '../../components/Comments/PostComments';
import { useParams } from 'react-router-dom';

export default function ReadPost({allPosts}){
    let {id} = useParams();
    let idNum = parseInt(id);

    const getPost = allPosts.filter((item) => item.id === idNum )[0];

    const createdAgo = moment(new Date(getPost.created_at)).fromNow();
    const edited_at = moment(new Date(getPost.edited)).fromNow()

    return (
        <>
            { getPost && 
                <div className="view-post">
                    <div className="post-container">
                        <div className="times">
                            <p>Posted {createdAgo}</p>
                            { getPost.edited ? (
                                <p className='sub-time'>(edited) {edited_at}</p>
                            ):null
                            }
                        </div>
                        <h4>{getPost.title} </h4>
                        <p>{getPost.content}</p>
        
                        { getPost.imgUrl ? 
                        (
                            <img className='post-img' src={getPost.imgUrl} alt='a broken img link'/>
                        )
                        :
                        null }

                        <PostStats 
                        upvotes={getPost.upvotes}
                        id={id}
                        post_key={getPost.user_key}
                        />

                        <PostComments id={id}/>
                        
                    </div>
                 
                </div>   
            }
        </>
       
        
    )
}