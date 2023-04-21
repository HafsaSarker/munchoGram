import './Card.css'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Card({id,created,title, upvotes, edited, flag}) {
    const createdAgo = moment(new Date(created)).fromNow();
    const edited_at = moment(new Date(edited)).fromNow()
    return (
        <>
            <Link to={'/viewPost/' + id}>
                <div className="card">
                    <div className="times">
                        <p>Posted {createdAgo}</p>
                        { edited ? (
                            <p className='sub-time'>(edited) {edited_at}</p>
                        ):null
                        }   
                    </div>
                    

                    <h4>{flag === "question" ? <span className='icon'><BsFillQuestionCircleFill /></span> : null }{title} </h4>

                    <p>{upvotes} upvotes</p>
                </div>
            </Link>
        </>        
        
    )
}