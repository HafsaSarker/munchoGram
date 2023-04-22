import { BsArrowReturnRight } from 'react-icons/bs'
import { supabase } from '../../Client'
import './PostComments.css'

export default function CommentCard({item, id,allComments, setAllComments, post}) {
    
    const validate = (id_) => {
        let user_key = prompt('Enter secret key to delete this comment')

        let i = 0;
        while(i < 3)
        {   
            if(user_key === null){
                break;
            }
            else if(user_key !== post.user_key){
                user_key = prompt('Wrong key, try again'); 
            }
            else{
                deleteComment(id_);
                break;
            }
            i++;
        }    

        if(i == 3 && user_key === post.user_key) {
            deleteComment(id_);
        }else if(i == 3 && user_key !== null){
            alert('You have exceeded the allowed number of attempts :(')
        }
    }
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

        alert('Comment deleted!')
    }

    return (
        <div className='single-comment'>
            <p>
                <span className='icon'>
                    <BsArrowReturnRight/>
                </span>
                <span className='bold'>{item.user}: </span>{item.content} 
                
                <button value={item.id_} onClick={(e) => validate(e.target.value)} className='delete-comment'>delete</button>
            </p>
        </div>
        
    )
}