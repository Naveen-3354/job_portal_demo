import { useFormik } from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { selectData } from '../slices/dataSlice';
import { Job, selectAllJobs } from "../slices/jobSlice";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import AsyncSelect from 'react-select/async';
import skills from "../data/skills.json";
import { JobCard } from './jobCard';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { log } from 'console';
import { setAppliedJobs, setUser, Skills, user } from '../slices/userSlice';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

interface UserData {
    firstName: string,
    lastName: string,
    email: string
}

export const Apply = () => {
    const navigate = useNavigate()
    const defaultUser = useSelector(user)
    const dispatch = useDispatch()
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const searchData = useSelector(selectAllJobs);
    const [about, setAbout] = useState(defaultUser.about);
    const [userSkills, setUserSkills] = useState(defaultUser.skills);
    const [userData, setUserData] = useState(defaultUser)


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    let currentJob = searchData[parseInt(id || "") - 1];
    if (loading) {
        return <div className='d-flex justify-content-center ' style={{ height: "80vh", alignItems: "center" }}> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }

    const filterColors = (inputValue: string) => {
        return skills.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const promiseOptions = (inputValue: string) =>
        new Promise<Skills[]>((resolve) => {
            setTimeout(() => {
                resolve(filterColors(inputValue));
            }, 1000);
        });

    const handleSkills = (e: any) => {
        setUserSkills(e)
    }

    const handleSubmit = (values: UserData) => {
        dispatch(setUser({ ...values, skills: userSkills, about }))
        dispatch(setAppliedJobs(parseInt(id || "")))
        navigate("/")
    }

    return (
        <div className="d-md-flex p-5 gap-5">
            <div className="flex-grow-1">
                <JobCard job={currentJob} viewjob={true} apply={true} style={["w-100"]} />
            </div>

            <div className='p-25 w-50 p-3flex-grow-1'>
                <h2 className="text-center">Apply Now</h2>
                <Formik
                    initialValues={userData}
                    validationSchema={SignupSchema}
                    onSubmit={values => {

                        handleSubmit(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className='d-flex flex-column gap-4'>

                            <div className="div">
                                <label htmlFor="firstName">First name :</label>
                                <Field name="firstName" className="inputs" id="firstName" />
                                {errors.firstName && touched.firstName ? (
                                    <div className='text-danger fw-bold'>{errors.firstName}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="lastname">Last Name :</label>
                                <Field name="lastName" className="inputs" id="lastname" />
                                {errors.lastName && touched.lastName ? (
                                    <div className='text-danger fw-bold'>{errors.lastName}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="email">Email : </label>
                                <Field name="email" type="email" className="inputs" id="email" />
                                {errors.email && touched.email ? <div className='text-danger fw-bold'>{errors.email}</div> : null}
                            </div>

                            <AsyncSelect
                                isMulti
                                cacheOptions
                                defaultOptions
                                onChange={handleSkills}
                                loadOptions={promiseOptions}
                            />

                            <div id="div_editor1">
                                <ReactQuill
                                    value={about}
                                    onChange={setAbout}
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export const AppliedJobd = () =>{
    const defaultUser = useSelector(user)
    const searchData = useSelector(selectAllJobs);

    const appliedJobs:Job[] = searchData.filter(job=> defaultUser.applied.includes(job.id))
    console.log(appliedJobs);
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center ' style={{ height: "80vh", alignItems: "center" }}> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }
    return (
        <div className="p-5 d-flex flex-column align-items-center">
            {
                appliedJobs.map((job, index)=>(
                    <JobCard job={job} style={["w-75 gap-4"]} apply={false} viewjob={false} key={index}/>
                ))
            }
        </div>
    )
}