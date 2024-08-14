import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utility/localStorage';
import { list } from 'postcss';

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect( () => {


        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){



            // const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))



            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            console.log(jobs, storedJobIds, jobsApplied);
        }
    } ,[])


    return (
        <div>
            <h2 className='text-2xl'>Jobs i applied : {appliedJobs.length}</h2>


            <ol>
                {
                    appliedJobs.map(job => <li key={job.id}> <span>{job.company_name}{job.job_title}</span></li>)
                }
            </ol>


        </div>
    );
};

export default AppliedJobs;