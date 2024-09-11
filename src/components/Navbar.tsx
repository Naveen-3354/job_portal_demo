import { Login } from "../pages/Login"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header id="header">
            <nav className=" border px-3 py-2" >
                <div className=" d-md-flex  justify-content-md-center align-item-md-center">
                    <button onClick={handleShow} className="border-1 h-25 d-md-none rounded" type="button" >
                        <i className="bi bi-list h4 border-none"></i>
                    </button>
                    <Link to="/" className="text-decoration-none"><a className="h2 logo text-decoration-none ms-2" href="#">OneJob</a></Link>

                    <div className="d-none d-md-flex w-100 justify-content-md-between align-items-md-center ms-md-4" id="navbarSupportedContent ">
                        <ul className="list-unstyled d-md-flex gap-5 m-0">
                            <li className="font-weight-bolder">
                            <Link to="/" className="text-decoration-none"><p className="fw-500 m-0">Home</p></Link>
                            </li>
                            <li className="">
                                <Link to={"/appliedJobs"} className="text-decoration-none"><p  className="fw-500 m-0" >Applied Jobs</p></Link>
                            </li>
                            <li className="">
                                <p  className="fw-500 m-0">Post a Job</p>
                            </li>
                            <li className="">
                                <p  className="fw-500 m-0">Companies</p>
                            </li>
                            <li className="font-weight-bold">
                                <p  className="fw-500 m-0">Blog</p>
                            </li>
                            <li className="font-weight-bold">
                                <p  className="fw-500 m-0">About Us</p>
                            </li>
                        </ul>
                        <div className="d-flex g-1">
                            <Link to="/login" className="text-decoration-none"><button type="button" className="btn btn-danger me-2">Login</button></Link>
                            <Link to="/register" className="text-decoration-none">  <button type="button" className="btn btn-primary">Register</button></Link>
                        </div>
                    </div>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><a className="h2 logo text-decoration-none ms-2" href="#">OneData</a></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className=" d-flex w-100 flex-column gap-3" id="navbarSupportedContent ">
                                <ul className="list-unstyled d-flex flex-column gap-3 m-0">
                                    <li className="font-weight-bolder">
                                    <Link to="/" className="text-decoration-none"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                                    </li>
                                    <li className="font-weight-bold">
                                        <a className="nav-link" href="#">Jobs</a>
                                    </li>
                                    <li className="font-weight-bold">
                                        <a className="nav-link" href="#">Post a Job</a>
                                    </li>
                                    <li className="font-weight-bold">
                                        <a className="nav-link" href="#">Companies</a>
                                    </li>
                                    <li className="font-weight-bold">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="font-weight-bold">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                </ul>
                                <div className="d-flex g-1">
                                    <button type="button" className="btn btn-danger me-2">Login</button>
                                    <button type="button" className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </nav>

        </header>
    )
}