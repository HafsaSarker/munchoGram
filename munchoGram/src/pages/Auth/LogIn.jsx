import { useState } from "react"
import { Link } from "react-router-dom";
import { supabase } from "../../Client";
import sleepyPanda from '../../../public/sleep.png'
import { useNavigate } from "react-router-dom";
import './LogIn.css'

export default function LogIn({setToken}){
    const [logInForm, setLogInForm] = useState({
        email: "",
        password: ""  
    })
    let navigate = useNavigate();

    function handleChange(e){
        setLogInForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    async function signIn(e){
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: logInForm.email,
                password: logInForm.password,
            })
    
            if (error) throw error
            navigate('/home')
            setToken(data)
            
        } catch (error) {
          alert(error)
        }
    }
    return (
        <>
            <img className='auth-img' src={sleepyPanda}/>
            <div className="login">
                <form onSubmit={signIn}>
                    <h2>Log in</h2>
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
                        Password:
                        <input 
                            required
                            type="password" 
                            name="password" 
                            onChange={handleChange}
                        />
                    </label>
                    <button>Log in</button>
                    <p>Don't have an account? 
                        <Link to='/signup'>
                            <span className='auth-link' >Create one!</span>
                        </Link>   
                    </p>
                </form>
            </div>
        </>
        
    )
}