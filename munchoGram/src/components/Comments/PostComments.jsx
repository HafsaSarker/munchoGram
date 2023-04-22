import { BsArrowReturnRight } from 'react-icons/bs'
import CommentCard from './CommentCard';
import { supabase } from '../../Client';
import { MdComment } from 'react-icons/md'
import './PostComments.css'
import { useState } from 'react'

export default function PostComments({id, token}){
    const [input, setInput] = useState({user: "", content: ""});
    const [allComments, setAllComments] = useState(null);

    useState(() => {
        const fetchComments = async () => {
            const {data,} = await supabase
                .from('munchies')
                .select()
                .eq('id', id)
                .single();
            
            const obj = (data.comments).map((item) => JSON.parse(item));
            
            setAllComments(obj)
        }
        fetchComments();
    }, [allComments]) 

    const handleChange = (e) => {
        setInput((prev) => ({
            ...prev,
            user: token.user.user_metadata.user_name,
            [e.target.name]: e.target.value
        })) 
    }
    //console.log(allComments)
    const submitComment = async (e) => {
        e.preventDefault();

        console.log(input)
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
        setInput("");
    }

    return (
        <div className="comments-container">
            <h4>Comments</h4>
            <div className="comments-main">
                {allComments && allComments.length > 0 ?
                (allComments.map((item, index) => 
                    <CommentCard
                        key={index}
                        item={item}
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