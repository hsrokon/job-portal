import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {

    const data = useLoaderData();

    const statusUpdate = (e, id) => {
        const value = e.target.value;
        // console.log(value, id);

        const updateField = {
            status : value
        }
        
        fetch(`http://localhost:5000/jobs/apply/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateField)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount) {
                alert('Status updated successfully!!')
            }
        }
        )

    }

    return (
        <div className='my-6'>
            <h1 className='text-3xl text-center font-semibold'>View your job applicants here: {data.length}</h1>

            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Applicant Email</th>
                        {/* <th>Linked In</th> */}
                        <th>Status</th>
                        <th>Update Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((app, idx) => 
                                <tr 
                                key={app._id}
                                className="hover:bg-base-300">
                                    <th>{idx+1}</th>
                                    <td>{app.applicantEmail}</td>
                                    {/* <td>{app.linkedIn}</td> */}
                                    <td>{app.status || 'Status is not set yet'}</td>
                                    <td>
                                        <select 
                                        onChange={(e)=> statusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Set status'} className="select select-xs">
                                            <option disabled={true}>Set status</option>
                                            <option>Under Review</option>
                                            <option>Set Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
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

export default ViewApplications;