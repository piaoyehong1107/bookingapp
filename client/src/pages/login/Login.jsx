import {useContext, useState} from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"


const Login = () => {
    cosnt[credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading,error,dispatch} = useContext(AuthContext)
    const handleChange = (e) => { 
        setCredentials(prev => ({...prev,[e.target.id]: e.target.value}))
    }
    const handleClick = () => { 
        
    }
    return (
        <div className="Login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
                <input type="text" placeholder="password" id="password" onChange={handleChange} className="lInput" />
                <button onClick={ handleClick} className="lButton">Login</button>
                {error && <span>{ error.message}</span>}
            </div>
    </div>
    )
}

export default Login