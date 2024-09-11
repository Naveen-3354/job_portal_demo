import { MyCarousel } from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";


import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setData } from '../slices/jobSlice';
import jsonData from '../data/jobs.json';
import { Outlet } from "react-router-dom";
import { filterJobs } from "../slices/searchData";

import { log } from "console";

export const Home = () => {
    const dispatch = useDispatch();

   
   
    useEffect(() => {
        dispatch(filterJobs(Array.isArray(jsonData) ? jsonData.slice(0, 10) : []))
        dispatch(setData(jsonData));
    }, [dispatch]);

    return (
        <div className="home">
            <Navbar />
            <Search />
            <Outlet />
        </div>
    );

}