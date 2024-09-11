import registerIcon from "../assets/login/add.png"
import lefticon from "../assets/login/login-illustration.png"
import google from "../assets/login/google.png"
import linkedIn from "../assets/login/linkedin.png"
import facebook from "../assets/login/facebook.png"
import "../styles/Login.scss"
import { Link } from "react-router-dom"
export const Register = () => {
    return (
        <div id="login">
            <nav>
                <Link to="/" className="text-decoration-none"> <h2>OneData</h2></Link>
                <Link to="/login" className="text-decoration-none"> <button><img src={registerIcon} alt="" />Login</button></Link>
            </nav>

            <div className="content">

                <div className="right">
                    <h3>Regiater</h3>
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
                        <label htmlFor="username">Mobile Number</label>
                        <input type="text" name="username" id="username" placeholder="Enter Mobile Number" />

                        <label htmlFor="username">Email ID</label>
                        <input type="text" name="username" id="username" placeholder="Enter Email ID" />

                        <label htmlFor="username">Password</label>
                        <input type="text" name="username" id="username" placeholder="Enter Password" />
                        <button>Continue</button>
                    </form>
                </div>
                <div className="left">
                    <img src={lefticon} alt="" />
                    <p>Create your profile now and be visible to the top recruiters in the world</p>
                </div>
            </div>
        </div>
    )
}