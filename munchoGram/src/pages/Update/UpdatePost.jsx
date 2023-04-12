import './UpdatePost.css'

export default function UpdatePost(){
    return (
        <div className="update-post">
            <h3>Edit Post</h3>
            <form className='update-post-form'>
                <input type="text" placeholder='Title' required/>
                <textarea placeholder='Content (Optional)' />
                <input type='text' placeholder='Image URL (Optional)' />
                <button>Edit</button>
            </form>
        </div>
    )
}