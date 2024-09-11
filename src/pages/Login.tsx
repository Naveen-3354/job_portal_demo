import registerIcon from "../assets/login/add.png"
import lefticon from "../assets/login/login-illustration.png"
import google from "../assets/login/google.png"
import linkedIn from "../assets/login/linkedin.png"
import facebook from "../assets/login/facebook.png"
import "../styles/Login.scss"
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div id="login">
            <nav>
                <Link to="/" className="text-decoration-none"> <h2>OneData</h2></Link>
                <Link to="/register" className="text-decoration-none"><button><img src={registerIcon} alt="" />Register</button></Link>
            </nav>

            <div className="content">
                <div className="left">
                    <img src={lefticon} alt="" />
                    <p>Create your profile now and be visible to the top recruiters in the world</p>
                </div>
                <div className="right">
                    <h3>Login</h3>
                    <div className="oauth">
                        <div className="lable">
                            <img src={google} alt="" />
                            <p>Google</p>
                        </div>
                        <div className="lable">
                            <img src={linkedIn} alt="" />
                            <p>LinkedIn</p>
                        </div>
                        <div className="lable">
                            <img src={facebook} alt="" />
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="or">
                        <hr />
                        <p>OR</p>
                        <hr />
                    </div>
                    <form action="">
                        <label htmlFor="username">Email ID / Phone Number</label>
                        <input type="text" name="username" id="username" placeholder="Enter Email ID/Phone Number" />
                        <button>Send OTP</button>
                        <a href="">Login via Password</a>
                    </form>
                </div>
            </div>
        </div>
    );
}