import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [ jobs, setJobs ] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
        <div className='-mt-44'>
            <h1 className='text-3xl text-indigo-600 text-center font-bold my-4'>See the lates hot jobs.</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                jobs.map(job => <HotJobsCard key={job._id} job={job} />)
                }
            </div>
            
        </div>
    );
};

export default HotJobs;