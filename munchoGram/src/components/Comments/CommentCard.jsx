import { BsArrowReturnRight } from 'react-icons/bs'
import './PostComments.css'

export default function CommentCard({item}) {
    console.log(item)
    return (
        <div className='single-comment'>
            <p>
                <span className='icon'>
                    <BsArrowReturnRight/>
                </span>
                <span className='bold'>{item.user}: </span>{item.content} 
                
                <span className='delete-comment'>delete</span>
            </p>
        </div>
        
    )
}