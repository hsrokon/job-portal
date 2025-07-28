import React from 'react';

const Apply = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;

        console.log(linkedIn, gitHub, resume);
        
    }

    return (
        <div className='w-7/12 mx-auto'>
            <h1>Apply Page:</h1>
 
            <div className='flex'>
                <form
                    onSubmit={handleSubmit}
                    className="card-body w-1/2">
                        <fieldset className="fieldset">
                        <label className="label">Linked In Url</label>
                        <input 
                        type="url" 
                        name='linkedIn'
                        className="input" 
                        placeholder="Place your Linked In url" />

                        <label className="label">GitHub Url</label>
                        <input 
                        type="url" 
                        name='gitHub'
                        className="input" 
                        placeholder="Place your GitHub url" />
                        
                        <label className="label">Resume Url</label>
                        <input 
                        type="url" 
                        name='resume'
                        className="input" 
                        placeholder="Place your Resume url" />

                        <button 
                        type='submit'
                        className="btn btn-neutral mt-4 w-fit">Apply</button>
                        </fieldset>
                    </form>

                    <div className='w-1/2'>
                        <h2>Job title</h2>
                    </div>
            </div>

            
        </div>
    );
};

export default Apply;