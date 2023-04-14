import './Card.css'
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Card({id,created,title, upvotes}) {
    const createdAgo = moment(new Date(created)).fromNow();

    return (
        <>
            <Link to={'/viewPost/' + id}>
                <div className="card">
                    <p>Posted {createdAgo}</p>

                    <h4>{title}</h4>

                    <p>{upvotes} upvotes</p>
                </div>
            </Link>
        </>        
        
    )
}