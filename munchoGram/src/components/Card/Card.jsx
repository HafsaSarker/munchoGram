import './Card.css'
import { MdAddCircle } from 'react-icons/md'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import moment from 'moment';
import { useState } from 'react';

export default function Card({id,created,title, upvotes, edited, flag, content, img, user}) {
    const [showCont, setShowCont] = useState(false);
    const createdAgo = moment(new Date(created)).fromNow();
    const edited_at = moment(new Date(edited)).fromNow();
    return (  
        <div className="card">
            <div className="times">
                <p>Posted {createdAgo}</p>
                {user ? <p className='user_name'>by {user}</p> : null} 

                { edited ? (
                    <p className='edit-time'>(edited) {edited_at}</p>
                ):null
                }   
            </div>

            <Link to={'/viewPost/' + id}>
                <h4>{flag === "question" ? <span className='icon'><BsFillQuestionCircleFill /></span> : null }{title} </h4>
            </Link>

            <div className='p-link'>
                {showCont ? 
                    <p onClick={() => setShowCont(prev => !prev)}>Collapse</p>
                    :
                    <p onClick={() => setShowCont(prev => !prev)}>Expand</p>
                }
                <span className='icon'><MdAddCircle /></span>
            </div>
            
            {showCont && 
                <Link to={'/viewPost/' + id}>
                    <div className="expand">
                        { content ? 
                            <p>{content}</p>
                        :   <p>No content found</p>
                        }
                        {img && 
                            <img src={img} />
                        }
                    </div>
                </Link>
            }
            <p>{upvotes} upvotes</p>  
        </div>
    )
}