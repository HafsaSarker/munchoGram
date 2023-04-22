import { BsArrowReturnRight } from 'react-icons/bs'
import { supabase } from '../../Client'
import './PostComments.css'

export default function CommentCard({item, id,allComments, setAllComments}) {
    const deleteComment = async(id_) => {
        const filter = allComments.filter((item) => item.id_ != id_)

        setAllComments(filter)

        //update database
        await supabase
        .from('munchies')
        .update({ 
            comments: [...filter]
        })
        .eq('id', id);

    }

    return (
        <div className='single-comment'>
            <p>
                <span className='icon'>
                    <BsArrowReturnRight/>
                </span>
                <span className='bold'>{item.user}: </span>{item.content} 
                
                <button value={item.id_} onClick={(e) => deleteComment(e.target.value)} className='delete-comment'>delete</button>
            </p>
        </div>
        
    )
}