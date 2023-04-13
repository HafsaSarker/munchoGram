import './Card.css'
import moment from 'moment';

export default function Card({created,title, upvotes}) {
    const createdAgo = moment(new Date(created)).fromNow();

    return (
        <div className="card">
            <p>Posted {createdAgo}</p>

            <h4>{title}</h4>

            <p>{upvotes} upvotes</p>
        </div>
    )
}