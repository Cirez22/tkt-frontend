import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router";
import { useContext, useState } from "react";

function LoginContent() {

    const history = useHistory();
    const {loginUser} = useContext(AuthContext)
    const [user,logUser] = useState ({
        email:'',
        password:'',
        role:''
    });

    const handleChange = (event) => {
        logUser ({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await loginUser(user)
        if (data.user.role === 'USER') {
            history.pushState('/dashboard')
        } else {
            history.pushState('/adminpanel')
        }
    }
    return (


        <section className="vh-100" style={{ backgroundColor: "eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                    value={user.email}
                                                    name='email'
                                                    type="text"
                                                    id="form3Example1c" 
                                                    className="form-control" 
                                                    placeholder="Email" 
                                                    onChange={handleChange}
                                                    />
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input 
                                                    type="password" 
                                                    id="form3Example4c" 
                                                    className="form-control" 
                                                    placeholder="Password"
                                                    onChange={handleChange}
                                                    name="password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">

                                                <p className="small fw-bold mt-2 pt-1 mb-0">No tienes una cuenta? <a href="/register"
                                                    className="link-danger">Registrate</a></p>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                

                                                {/* Cambiar con un onClick={handleSubmit} */}
                                            <Link to="/dashboard">
                                                <button 
                                                type="button" 
                                                className="btn btn-primary btn-lg"
                                                onClick={handleSubmit}
                                                >Ingresa</button>
                                            </Link>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid" alt="Sam" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default LoginContent;