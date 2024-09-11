import { Job } from "../slices/jobSlice";

export function filterBySearch(data: Array<Job>, title: String, skills: String, location: String) {
    let escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let escapedSkills = skills.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let escapedLocation = location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let titlePattern = new RegExp(escapedTitle, 'i');
    let skillsPattern = new RegExp(escapedSkills, 'i');
    let locationPattern = new RegExp(escapedLocation, 'i');
    let filteredData = data
    
    if (title) {
        filteredData = filteredData.filter((jobs: Job) => {
            if (titlePattern.test(jobs.title)) {
                return jobs;
            }
        })
    }
    if (skills) {
        filteredData = filteredData.filter((jobs: any) => {
            if (skillsPattern.test(jobs["Skills Required"])) {
                return jobs;
            }
        })
    }
    
    if (location) {
        filteredData = filteredData.filter((jobs: any) => {
            if (locationPattern.test(jobs["Location"])) {
                return jobs;
            }
        })
        
    }

    return filteredData;
}
