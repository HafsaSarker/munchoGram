import './HomeFeed.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import panda from '../../../public/panda.png'
import { supabase } from '../../Client';

export default function HomeFeed({allPosts, setAllPosts}){
    const[sort, setSort] = useState("created_at");

    //fetch all posts
    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('munchies')
            .select()
            .order(sort, { ascending: false });
            
            setAllPosts(data);
        }
        fetchPosts();
    }, [allPosts])

    return (
        <>
            <div className="header">
                <h4>a place for foodies...</h4>
                <img src={panda} />

            </div>
            {allPosts && 
                <div className="home-feed">
                <div className="sort">
                 <p>Order by: </p>
                 <button className='filter-btn' value="created_at" onClick={(e) => setSort(e.target.value)}>Newest</button>
                 <button className='filter-btn' value="upvotes" onClick={(e) => setSort(e.target.value)}>Most Popular</button>
                </div>
     
                <div className="card-container">
                     { allPosts && 
                         allPosts.map((post, index) => 
                             <Card 
                                 key={index}
                                 id={post.id}
                                 created={post.created_at}
                                 edited={post.edited}
                                 title={post.title}
                                 upvotes={post.upvotes}
                             />
                         )
                     }
     
                 </div>
     
             </div>
            }
        </>
        
    )
}