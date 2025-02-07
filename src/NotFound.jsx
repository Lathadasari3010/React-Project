import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound()
{
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        },5000)
    },[])
    return(
        <>
        <h1>The page is not available......</h1>
        <img src="not-found.jpg" height={400}></img>
        </>
    )
}
export default NotFound;