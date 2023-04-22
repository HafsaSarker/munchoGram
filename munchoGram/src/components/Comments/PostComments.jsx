import { BsArrowReturnRight } from 'react-icons/bs'
import CommentCard from './CommentCard';
import { supabase } from '../../Client';
import { MdComment } from 'react-icons/md'
import './PostComments.css'
import { useState } from 'react'

export default function PostComments({id, token, post}){
    const [input, setInput] = useState({user: "", content: "", id_: null});
    const [allComments, setAllComments] = useState(null);

    useState(() => {
        const fetchComments = async () => {
            const {data} = await supabase
                .from('munchies')
                .select()
                .eq('id', id)
                .single();
            
            const obj = data.comments ? (data.comments).map((item) => JSON.parse(item)) : null;
            
            setAllComments(obj)
        }
        fetchComments();
    }, [allComments]) 

    const handleChange = (e) => {
        let lastID = allComments.length > 0 ? allComments[allComments.length - 1].id_ + 1 : 0;
        
        setInput((prev) => ({
            ...prev,
            id_: lastID,
            user: token.user.user_metadata.user_name,

            [e.target.name]: e.target.value
        })) 
    }

    const submitComment = async (e) => {
        e.preventDefault();

        // make copy of array in order to avoid modification
        let temp =[];
        if(allComments){
            temp = allComments.slice();
            temp.push(input);
        }else{
            temp.push(input);
        }
        setAllComments(temp);

        //update database
        await supabase
            .from('munchies')
            .update({ 
                comments: [...temp]
            })
            .eq('id', id);

        //clear comment input
        setInput((prev) => ({
            ...prev,
            content: ""
        }));
    }

    return (
        <div className="comments-container">
            <h4>Comments</h4>
            <div className="comments-main">
                {allComments && allComments.length > 0?
                (allComments.map((item, index) => 
                    <CommentCard
                        key={index}
                        item={item}
                        id={id}
                        allComments={allComments}
                        setAllComments={setAllComments}
                        post={post}
                    />
                )):
                (
                    <p>
                        <span className='icon'>
                            <BsArrowReturnRight/>
                        </span>
                        No comments yet. Make one below!
                    </p>
                    
                )}
                <form onSubmit={submitComment}>
                    <input 
                        value={input.content}
                        name='content'
                        type="text" 
                        placeholder='Leave a comment'
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' className='comment-btn'><MdComment/></button>
                </form>
            </div>
            
            
        </div>
    )
}