import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { data } from 'autoprefixer';

const FeaturedJobs = () => {

    
    
    const [Jobs, setJobs] = useState([]);
     useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [])



        const [dataLength, setDataLength] = useState(4);


    return (
        <div>
            <div className='text-center'>
                <h2 className='text-5xl'>Featured Jobs: {Jobs.length}</h2>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    Jobs.slice(0, dataLength).map(job => <Job key={job.id} job ={job}></Job>)
                }
            </div>
            <div className={ dataLength === Jobs.length && "hidden"} >
                <button
                onClick={()=> setDataLength(Jobs.length)}
                className='btn'>Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;