import { useState } from 'react'
import sleepyPanda from '../../../public/sleep.png'
import { supabase } from '../../Client'
import './AuthModal.css'

export default function AuthModal({auth, setAuth}){
    const [createForm, setCreateForm] = useState({
        username: "",
        password: "",
        email: ""
    })

    const [logInForm, setLogInForm] = useState({
        email: "",
        password: ""  
    })

    function handleChange(e){
        setCreateForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    async function createAccout(e){
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signUp(
                {
                  email: createForm.email,
                  password: createForm.password,
                  options: {
                    data: {
                      user_name: createForm.username,
                    }
                  }
                }
            ) 
            if(error) throw error

            alert("Check your email for verification link :)")   
            
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <img className='auth-img' src={sleepyPanda}/>
            <div className="auth-modal">
                {!auth ? 
                    <form onSubmit={createAccout}>
                        <h2>Sign Up</h2>
                        <label>
                            Email:
                            <input 
                                required
                                type="text" 
                                name="email" 
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Username:
                            <input 
                                required
                                type="text" 
                                name="username" 
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input 
                                required
                                type="password" 
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