import { useEffect, useState } from "react";
import Context from "../hooks/Context";



const MyApplications = () => {
    
    const { user } = Context();
    
    const [ application, setApplications ] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:5000/jobs/apply?email=${user.email}`)
        .then(res => res.json())
        .then(data => setApplications(data))
    },[user.email])
 

    return (
        <div className="w-10/12 mx-auto my-4">
            <h1 className="text-2xl font-semibold">My Applications : {application.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                      application.map(app => 
                        <tr key={app._id}> 
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={app.companyLogo}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                {/* <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm opacity-50">United States</div> */}
                                </div>
                            </div>
                            </td>
                            <td>
                            {app.jobTitle}
                            <br />
                            <span className="badge badge-ghost badge-sm">{app.location}</span>
                            </td>
                            <td>{app.company}</td>
                            <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                      )  
                    }
                    
                    </tbody>
                    
                </table>
</div>

        </div>
    );
};

export default MyApplications;