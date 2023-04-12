import './HomeFeed.css'
import Card from '../../components/Card/Card'

export default function HomeFeed(){
    return (
        <div className="home-feed">
           <div className="sort">
            <p>Order by: </p>
            <button className='filter-btn'>Newest</button>
            <button className='filter-btn'>Most Popular</button>
           </div>

           <div className="card-container">
                <Card />

                <Card />
            </div>

        </div>
    )
}