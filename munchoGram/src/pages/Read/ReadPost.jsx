import './ReadPost.css'
import { BsArrowReturnRight } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'

export default function ReadPost(){
    return (
        <div className="view-post">
           <div className="post-container">
                <p>Posted 20 hours ago</p>
                <h4>What is your favorite Korean food? </h4>
                <p>Mine is tteokbokki! The chewy rice cakes never gets old xD</p>
                <img className='post-img' src='https://stellanspice.com/wp-content/uploads/2022/02/IMG_4291-1.jpeg'/>
                <div className="post-stats">
                    <p className='upvotes'><span className='icon'><AiOutlineHeart/></span>3</p>
                    <div className="update-icons">
                        <span className="icon"><MdOutlineEdit/></span>
                        <span className="icon"><MdDeleteOutline/></span>
                    </div>
                </div>
                <div className="comments-container">
                    <p><span className='icon'><BsArrowReturnRight/></span>omg! How did you make that?</p>
                    <p><span className='icon'><BsArrowReturnRight/></span>watching this at 3am is not a good feeling</p>
                    <input type="text" placeholder='Leave a comment'/>
                </div>
            </div>
            
        </div>
    )
}