import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchJobs } from '../slices/searchData';
import Spinner from 'react-bootstrap/Spinner';
import { JobCard } from './jobCard';
import { Job } from '../slices/jobSlice';
export const ImportJobs = () => {
    const popularJobs: Job[] = useSelector(searchJobs);
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
        <div className="container mt-5">
            <div className="row">
                {popularJobs.length !== 0 ? popularJobs.map((item: Job, index: any) => (
                    <JobCard viewjob={false} apply={false} style={[]} key={index} job={item} />
                )) : <div>
                    No data
                </div>}
            </div>
        </div>
    )
}