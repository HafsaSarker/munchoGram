import './HomeFeed.css'
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import { supabase } from '../../Client';

export default function HomeFeed({allPosts, setAllPosts}){

    //fetch all posts
    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('munchies')
            .select()
            .order('created_at', { ascending: true })
            
            setAllPosts(data);
        }
        fetchPosts();
    }, [allPosts])
    //console.log(allPosts)
    return (
        <div className="home-feed">
           <div className="sort">
            <p>Order by: </p>
            <button className='filter-btn'>Newest</button>
            <button className='filter-btn'>Most Popular</button>
           </div>

           <div className="card-container">
                { allPosts && 
                    allPosts.map((post, index) => 
                        <Card 
                            key={index}
                            created={post.created_at}
                            title={post.title}
                            upvotes={post.upvotes}
                        />
                    )
                }

            </div>

        </div>
    )
}