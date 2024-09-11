import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllJobs } from '../slices/jobSlice'
import { filterJobs } from '../slices/searchData';
import { filterBySearch } from './filterJobs';
export const Search = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectAllJobs);
    const [searchDeatils, setSearchDetails] = useState({
        title: "",
        skills: "",
        location: ""
    })
    const handleSearchChange = (e: any) => {
        setSearchDetails({ ...searchDeatils, [e.target.name]: e.target.value })
    };

    const handleCLick = (e: any) => {
        dispatch(filterJobs(filterBySearch(data, searchDeatils.title, searchDeatils.skills, searchDeatils.location)));
    }
    return (
        <div id="search" className="d-flex align-items-center justify-content-center" style={{ height: "10vh", background: "linear-gradient(to right, #007bff, #6610f2)" }}>
            <div className="d-flex flex-wrap gap-2 justify-content-center w-100" >
                <input className="form-control me-2 w-25" type="Title" placeholder="Title" aria-label="Search" name='title' onChange={handleSearchChange} />
                <input className="form-control me-2 w-25" type="Skills" placeholder="Skills" aria-label="Search" name='skills' onChange={handleSearchChange} />
                <input className="form-control me-2 w-25" type="Location" placeholder="Location" aria-label="Search" name='location' onChange={handleSearchChange} />
                <button className="btn btn-success" onClick={handleCLick} >Search</button>
            </div>
        </div>
    )

}