import React from "react";
import LoginContent from "../components/Login/LoginContent"
import AuthContext  from "../context/AuthContext";

function Login () {
    return ( 
        <div>
            <AuthContext>
            
            <LoginContent/>
           
            </AuthContext>
        </div>
    )
}

export default Login;
