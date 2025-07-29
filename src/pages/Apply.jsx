import React from 'react';
import Context from '../hooks/Context';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Apply = () => {

    const { id } = useParams();
    const { user } = Context();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;

        // console.log(linkedIn, gitHub, resume);

        const jobApplication = {
            jobId : id,
            applicantEmail: user.email,
            linkedIn,
            gitHub,
            resume
        }
        
        fetch('http://localhost:5000/jobs/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Job applied successfully');
                navigate('/myApplications')
            }
        })

    }

    return (
        <div className='w-11/12 md:w-7/12 mx-auto'>
            <h1 className='my-4 text-center text-2xl font-semibold'>Apply Page:</h1>
 
            <div className='flex'>
                <form
                    onSubmit={handleSubmit}
                    className="card-body border font-semibold">
                        <fieldset className="fieldset">
                        <label className="label">Linked In Url</label>
                        <input 
                        type="url" 
                        name='linkedIn'
                        className="input w-full" 
                        placeholder="Place your Linked In url" />

                        <label className="label">GitHub Url</label>
                        <input 
                        type="url" 
                        name='gitHub'
                        className="input w-full" 
                        placeholder="Place your GitHub url" />
                        
                        <label className="label">Resume Url</label>
                        <input 
                        type="url" 
                        name='resume'
                        className="input w-full" 
                        placeholder="Place your Resume url" />

                        <button 
                        type='submit'
                        className="btn btn-neutral mt-4 w-full">Apply</button>
                        </fieldset>
                    </form>

            </div>

            
        </div>
    );
};

export default Apply;