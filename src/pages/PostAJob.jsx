import React from 'react';
import Context from '../hooks/Context';
import { useNavigate } from 'react-router-dom';

const PostAJob = () => {

    const { user } = Context();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;//separating min, max,currency and making a new object 'newJob'
        newJob.salaryRange = { min, max, currency };//using short hand and creating a new object at newJob
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('job posted successfully!');
            navigate('/myPostedJobs');
        }
        )
        
    }


    return (
        <div className='w-6/12 mx-auto my-4'>
            <h1 className='text-2xl font-semibold text-center'>Post a Job</h1>

            <form 
            onSubmit={handleSubmit}
            className="card-body">

                <label className="label">Job Title</label>
                <input 
                type="Text" 
                name='title'
                className="input w-full" 
                placeholder="Job Title" />
                
                <label className="label">Job Location</label>
                <input 
                name='location'
                type="Text" 
                className="input w-full" 
                placeholder="Job Location" />
                
                <label className="label">Job Type</label>
                <select 
                name='jobType'
                defaultValue="Choose a type" 
                className="select select-primary w-full">
                    <option disabled={true}>Choose a type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Remote</option>
                </select>
                
                <label className="label">Job Category</label>
                <select 
                name='category'
                defaultValue="Choose a category" 
                className="select select-primary w-full">
                    <option disabled={true}>Choose a category</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Teaching</option>
                    <option>Management</option>
                </select>

                <label className="label">Application Deadline</label>
                <input 
                type="date" 
                name="applicationDeadline"
                className='input' />

                <label className="label">Provide Salary Range</label>
                <div className='flex gap-2'>
                    <input 
                    type="number" 
                    name='min'
                    className="input w-full" 
                    placeholder="min" />

                    <input 
                    type="number"
                    name='max' 
                    className="input w-full" 
                    placeholder="max" />

                    <select 
                    defaultValue="Currency" 
                    name='currency'
                    className="select select-primary w-full">
                        <option disabled={true}>Currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EURO</option>
                    </select>
                </div>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea 
                    name='description'
                    className="textarea h-24 w-full" 
                    placeholder="Describe..."></textarea>
                </fieldset>

                <label className="label">Company Name:</label>
                <input 
                type="Text" 
                name='company'
                className="input w-full" 
                placeholder="Company name" />

                <label className="label">Company Logo URL:</label>
                <input 
                type="url" 
                name='company_logo'
                className="input w-full" 
                placeholder="Company Logo URL" />

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea
                    name='requirements' 
                    className="textarea h-24 w-full" 
                    placeholder="Enter one Requirements / line"></textarea>
                </fieldset>
                
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea 
                    name='responsibilities'
                    className="textarea h-24 w-full" 
                    placeholder="Enter one Responsibilities / line"></textarea>
                </fieldset>
                
                <label className="label">HR Name</label>
                <input 
                type="Text" 
                defaultValue={user.displayName}
                name='hr_name'
                className="input w-full" 
                placeholder="HR Name" />
                
                <label className="label">HR Email</label>
                <input 
                type="Text" 
                defaultValue={user.email}
                name='hr_email'
                className="input w-full" 
                placeholder="HR Email" />

                <button className="btn btn-neutral mt-4">Post</button>
            </form>
        </div>
    );
};

export default PostAJob;