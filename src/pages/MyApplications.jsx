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
        <div>
            <h1>My Applications : {application.length}</h1>
        </div>
    );
};

export default MyApplications;