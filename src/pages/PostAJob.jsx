import React from 'react';

const PostAJob = () => {
    return (
        <div className='w-6/12 mx-auto my-4'>
            <h1 className='text-2xl font-semibold text-center'>Post a Job</h1>

            <form className="card-body">

                <label className="label">Job Title</label>
                <input 
                type="Text" 
                className="input w-full" 
                placeholder="Job Title" />
                
                <label className="label">Job Location</label>
                <input 
                type="Text" 
                className="input w-full" 
                placeholder="Job Location" />
                
                <label className="label">Job Type</label>
                <select 
                defaultValue="Choose a type" 
                className="select select-primary w-full">
                    <option disabled={true}>Choose a type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Remote</option>
                </select>
                
                <label className="label">Job Category</label>
                <select 
                defaultValue="Choose a category" 
                className="select select-primary w-full">
                    <option disabled={true}>Choose a category</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Teaching</option>
                    <option>Management</option>
                </select>

                <label className="label">Provide Salary Range</label>
                <div className='flex gap-2'>
                    <input 
                    type="Text" 
                    className="input w-full" 
                    placeholder="min" />

                    <input 
                    type="Text" 
                    className="input w-full" 
                    placeholder="max" />

                    <select 
                    defaultValue="Currency" 
                    className="select select-primary w-full">
                        <option disabled={true}>Currency</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                        <option>Management</option>
                    </select>
                </div>
                

                <button className="btn btn-neutral mt-4">Post</button>
            </form>
        </div>
    );
};

export default PostAJob;