import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
// import { selectData } from '../slices/dataSlice';
import { Job, selectAllJobs } from "../slices/jobSlice";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import { JobCard } from "./jobCard";
import { filterBySearch } from './filterJobs';


export const ViewJob = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const searchData = useSelector(selectAllJobs);
    let updateData: Job[] =[];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    let currentJob = searchData[parseInt(id || "")-1];
    

    if (loading) {
        return <div className='d-flex justify-content-center ' style={{ height: "80vh", alignItems: "center" }}> <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>;
    }

    function relatedJobs() {
        let relatedTitle = currentJob.title.split(" ")
        console.log(relatedTitle);
        
        updateData = filterBySearch(searchData, relatedTitle[relatedTitle.length - 1], "", "")
        updateData = updateData.filter(x => x.id !== currentJob.id)
    }
    relatedJobs()
    if (!Array.isArray(searchData)) {
        return <div>Error: Data format is incorrect.</div>;
    }
    return (
        <div id="ViewJobs" className="d-md-flex justify-content-md-center gap-5 mx-5">
            <div className="mt-5 w-100" style={{ maxWidth: "1000px" }}>
                <JobCard  job={currentJob} viewjob={true} apply={false} style={["w-100", ]} />
            </div>
            <div className="mt-3 w-md-50" style={{ maxWidth: "1000px" }}>
                <h2>Related Jobs</h2>
                {updateData.length !== 0 ? updateData.map((item: Job, index: any) => (
                    <JobCard job={item} viewjob={false} apply={false} style={["w-100"]} key={index}/>
                )) : <div>
                    No data
                </div>}
            </div>
        </div>
    )
}