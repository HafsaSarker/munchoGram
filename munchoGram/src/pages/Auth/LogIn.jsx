import { useState } from "react"
import { supabase } from "../../Client";

export default function LogIn({setAuth}){
    const [logInForm, setLogInForm] = useState({
        email: "",
        password: ""  
    })

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
            console.log(data)

        } catch (error) {
          alert(error)
        }
    }
    return (
        <form onSubmit={signIn}>
            <h2>Log in</h2>
            <label>
                Username:
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
            <p>Don't have an account? <span className='auth-link' onClick={() => setAuth(false)}>Create one!</span></p>
        </form>
    )
}