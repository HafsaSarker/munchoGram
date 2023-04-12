import './HomeFeed.css'
import Card from '../../components/Card/Card'

export default function HomeFeed(){
    return (
        <div className="home-feed">
           <div className="sort">
            <p>Order by: </p>
            <p className='filter-btn'>Newest</p>
            <p className='filter-btn'>Most Popular</p>
           </div>

           <div className="card-container">
                <Card />

                <Card />
            </div>

        </div>
    )
}