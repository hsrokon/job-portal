import React, { useEffect, useState } from 'react';
import Context from '../hooks/Context';

const MyPostedJobs = () => {

    const { user } = Context();
    const [ jobs, setJobs ] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user])
    console.log(jobs);
    



    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold text-center'>All your posted jobs are here! {jobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;