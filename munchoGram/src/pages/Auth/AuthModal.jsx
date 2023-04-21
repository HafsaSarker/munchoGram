import { useState } from 'react'
import sleepyPanda from '../../../public/sleep.png'
import './AuthModal.css'

export default function AuthModal({auth, setAuth}){
    const [createForm, setCreateForm] = useState({
        username: "",
        password: ""
    })

    function handleChange(e){
        setCreateForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    function createAccout(e){
        e.preventDefault();
        console.log(createForm)
    }
    return (
        <>
            <img className='auth-img' src={sleepyPanda}/>
            <div className="auth-modal">
                {!auth ? 
                    <form onSubmit={createAccout}>
                        <h2>Sign Up</h2>
                        <label>
                            Username:
                            <input 
                                type="text" 
                                name="username" 
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input 
                                type="text" 
                                name="password" 
                                onChange={handleChange}
                            />
                        </label>
                        <button>Sign Up</button>
                        <p>Already have an account? <span className='auth-link' onClick={() => setAuth(true)}>Log in</span></p>
                    </form>
                :
                    <form>
                        <h2>Log in</h2>
                        <label>
                            Username:
                            <input 
                                type="text" 
                                name="" 
                            />
                        </label>
                        <label>
                            Password:
                            <input 
                                type="text" 
                                name="" 
                            />
                        </label>
                        <button>Log in</button>
                        <p>Don't have an account? <span className='auth-link' onClick={() => setAuth(false)}>Create one!</span></p>
                    </form>
                }
                
            </div>
        </>
        
    )
}