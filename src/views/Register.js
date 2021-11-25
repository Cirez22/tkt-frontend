import React from "react";
import RegisterContent from "../components/Register/RegisterContent"
import AuthContext from "../context/AuthContext";

function Register () {
    return ( 
        <div>
            <AuthContext>
            <RegisterContent/>
            </AuthContext>
        </div>
    )
}

export default Register;
