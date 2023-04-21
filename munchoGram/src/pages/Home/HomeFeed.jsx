import './HomeFeed.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import panda from '../../../public/panda.png'
import { supabase } from '../../Client';

export default function HomeFeed({allPosts, setAllPosts, searchInput}){
    const[sort, setSort] = useState("created_at");
    let ascend = {};

    if(sort === "isQuestion"){
        ascend = { isQuestion: true, ascending: false}
    }
    else if(sort === "flag"){
        ascend = { flag: 'opinion' }
    }
    else{   
        ascend = {ascending: false}
    }
    //fetch all posts
    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('munchies')
            .select()
            .order(sort, ascend);
            
            setAllPosts(data);
        }
        fetchPosts();
    }, [allPosts])

    const filteredPosts = searchInput && 
        allPosts.filter(item =>
        item.title
        .toLowerCase()
        .includes(searchInput)
    )

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

                    <button className='filter-btn' value="isQuestion" onClick={(e) => setSort(e.target.value)}>Question</button>

                    <button className='filter-btn' value="flag" onClick={(e) => setSort(e.target.value)}>Opinion</button>
                </div>
                
                { !searchInput ? (
                    <div className="card-container">
                        {
                            allPosts.map((post, index) => 
                                <Card 
                                    key={index}
                                    id={post.id}
                                    created={post.created_at}
                                    edited={post.edited}
                                    title={post.title}
                                    upvotes={post.upvotes}
                                    flag={post.flag}
                                />
                            )
                        }
        
                    </div>
                )
                : (
                    <div className="card-container">
                        { 
                            filteredPosts.map((post, index) => 
                                <Card 
                                    key={index}
                                    id={post.id}
                                    created={post.created_at}
                                    edited={post.edited}
                                    title={post.title}
                                    upvotes={post.upvotes}
                                    flag={post.flag}
                                />
                            )
                        }
        
                    </div>
                )}
     
             </div>
            }
        </>
        
    )
}