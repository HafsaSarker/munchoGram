import './CreatePost.css'

export default function CreatePost(){
    return (
        <div className="create-post">
            <h3>Create Post</h3>
            <form className='create-post-form'>
                <input type="text" placeholder='Title' required/>
                <textarea placeholder='Content (Optional)' />
                <input type='text' placeholder='Image URL (Optional)' />
                <button>Create</button>
            </form>
        </div>
    )
}