import './CommentCard.css'
import { BsArrowReturnRight } from 'react-icons/bs'

export default function CommentCard({commentContent}) {
    return (
        <div className='single-comment'>
            <p>
                <span className='icon'>
                    <BsArrowReturnRight/>
                </span>
                {commentContent} 
                
            </p>
            <span className='comment-action'>Delete</span>
        </div>
        
    )
}