import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';

function Register() {

  const history = useHistory();
  const {signUpUser} = useContext(AuthContext)
  const [user,setUser] = useState({
    email:'',
    password:'',
    role:''
  })

  const handleChange = (event) => {
    setUser ({
      ...user,[event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpUser(user)
    if (user.role === 'USER') {
      history.push('/dashboard');
    } else {
      history.push('panel')
    }
    setUser ({
      email:'',
      password:'',
      role:''
    })
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

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrarse</p>

                    <form className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                          value={user.email}
                          name='email'
                          type="email" 
                          id="form3Example1c" 
                          className="form-control" 
                          placeholder="Email"
                          onChage={handleChange}
                           />
                        </div>
                      </div>


                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input 
                           value={user.password}
                           name='password'
                           type="password"
                           id="form3Example4c" 
                           className="form-control"
                           placeholder="Password"
                           onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

                          <select onChange={handleChange} name="role" className="form-select" aria-label="Default select example">
                            {/* <option select=''>Role</option> */}
                            <option value="USER">Usuario</option>
                            <option value="ADMIN">Admin</option>
                          </select>
                        </div>

                      <Link to="/panel" style={{marginLeft:"145px"}}>
                        <button
                        onClick={handleSubmit}
                         type="button"
                          className="btn btn-primary btn-lg"
                          >Ingresar</button>
                      </Link>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sam" />

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

export default Register;