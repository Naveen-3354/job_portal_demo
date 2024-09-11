import { Link } from "react-router-dom"
import { Job } from "../slices/jobSlice";
import { useSelector } from "react-redux";
import { userJobs } from "../slices/userSlice";


interface JobCardProps {
    job:Job,
    viewjob:boolean,
    apply:boolean,
    style:string[]
  }

export const JobCard = (props: JobCardProps) => {

    const jobIds = useSelector(userJobs)
    let jobstyle = props.style.toString()

    function ifJobApplied(id:number):boolean {
        for(let x of jobIds){
            if(x === id){
                return true;
            }
        }
        return false;
    }
    return (
        <div className={`col-12 col-md-6 col-lg-4 mb-4 ${jobstyle}`}>
            <div className="card p-3">
                <h2 className="card-title">{props.job.title}</h2>
                <div className="card-subtitle mb-2 text-muted d-flex justify-content-between">
                    <h5>{props.job.company}</h5>
                    <span className='fs-0'>Location: {props.job.location}</span>
                </div>
                <p className="card-text">Experience: {props.job.experience}</p>
                <p className="card-text">
                    Skills Required:
                    {props.job.skills && Array.isArray(props.job.skills) ? (
                        props.job.skills.map((skill: String, skillIndex: number) => (
                            <span key={skillIndex} className="badge bg-warning me-1">{skill}</span>
                        ))
                    ) : (
                        <span>No skills listed</span>
                    )}
                </p>
                <p className="card-text">Description: {props.job.description}</p>
                <div className="d-flex justify-content-between">
                   {!props.viewjob ? <Link to={`/${props.job.id}`} className="link-light text-decoration-none"><button className="btn btn-info">View</button></Link> : <></>}
                   {!props.apply ? !ifJobApplied(props.job.id) ?<Link to={`/${props.job.title}/${props.job.id}`} className="link-light text-decoration-none"><button className="btn btn-primary">Apply</button></Link>: <button className="btn btn-success" disabled>!Applied</button> : <></>}
                </div>
            </div>
        </div>
    )
}