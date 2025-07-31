import React, { useEffect, useState } from 'react';
import Context from '../hooks/Context';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {

    const { user } = Context();
    const [ jobs, setJobs ] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user])



    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold text-center'>All your posted jobs are here! {jobs.length}</h1>

            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Total Applicants</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        jobs.map((job, idx) => 
                            <tr key={job._id} className="hover:bg-base-300">
                                <th>{idx+1}</th>
                                <td>{job.title}</td>
                                <td>{job.description}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`}> 
                                        <button className='btn btn-link'>
                                            View Applications
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;