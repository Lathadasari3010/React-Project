import { useRef } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";

function Login()
{

    let username=useRef(null);
    let password=useRef(null);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    let LoginCheck = ()=>{
        if(username.current.value==="ratan" && password.current.value ==="Ratan@123"){
            dispatch(login(username.current.value))
            navigate("/home")
        }
        else{
            alert("Your Login credentials are wrong.Check once!")
        }
    }


    return(
        <>
       
        <h1>Login Form</h1>
        <label>User Name:</label>
        <input type="text" ref={username}></input>
        <br/><br/>
        <label>Password:</label>
        <input type="password" ref={password}></input>
        <br/><br/>
        <input type='submit' value="Login" onClick={LoginCheck}></input>
        

        </>
    )

}
export default Login;