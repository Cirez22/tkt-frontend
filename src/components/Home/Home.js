import React from "react";
import { Link } from "react-router-dom";

import "../../styles/Home.css"

function Home() {
    return (

        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5ffbe66cb89b33e0eb9e75be_economy-and-finance-card-image.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Panel Control</h1>
                    <p className="lead">Un espacio personalizado para el seguimiento de distinas cuestiones financieras.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/login">
                            <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Login</button>
                        </Link>
                        <Link to="/register">
                            <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Register</button>
                        </Link>                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
