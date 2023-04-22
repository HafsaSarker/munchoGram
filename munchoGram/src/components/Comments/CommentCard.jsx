import { BsArrowReturnRight } from 'react-icons/bs'
import { supabase } from '../../Client'
import './PostComments.css'

export default function CommentCard({item}) {
    const deleteComment = async(value) => {
        // await supabase
        //     .from('munchies')
        //     .delete()
        //     .eq('id', id);
        // alert('Post deleted!');
        // window.location='/home';
        console.log(value)
    }

    return (
        <div className='single-comment'>
            <p>
                <span className='icon'>
                    <BsArrowReturnRight/>
                </span>
                <span className='bold'>{item.user}: </span>{item.content} 
                
                <button value={item.index} onClick={(e) => deleteComment(e.target.value)} className='delete-comment'>delete</button>
            </p>
        </div>
        
    )
}