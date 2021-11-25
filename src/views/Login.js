import React from "react";
import LoginContent from "../components/Login/LoginContent"
import RegisterContent from "../components/Register/RegisterContent";
import AuthContext  from "../context/AuthContext";

function Login () {
    return ( 
        <div>
            <AuthContext>
            <RegisterContent>
            <LoginContent/>
            </RegisterContent>
            </AuthContext>
        </div>
    )
}

export default Login;
