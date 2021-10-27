import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#2" style={{marginLeft:"50px"}}>Panel de Control</a>

                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link to="/">
                            <button type="button" className="btn btn-primary btn-lg" style={{margin:"10px", marginRight:"50px"}}>Log Out</button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;