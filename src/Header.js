import { Link } from "react-router-dom"

const Header =()=>{
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to='/'>Easy Coding</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to='/'>Home</Link></li>
                    <li><Link to='/Post'>Post</Link></li> 
                    <li><Link to='/Profile'>Profile</Link></li>
                </ul>
                {/* <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul> */}
                </div>
            </div>
        </nav>
    )
}
export default Header;