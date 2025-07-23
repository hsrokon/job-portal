import Lottie from 'lottie-react';
import login from '../../assets/login/Login.json';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


const LogIn = () => {

    const { loginUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

    
        loginUser(email, password)
        .then(credential => {
            console.log(credential.user); 
        })
        
    }


    return (
        <div className='lg:w-7/12 mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Log In now!</h1>
                    <Lottie animationData={login}/>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form
                    onSubmit={handleSubmit}
                    className="card-body">
                        <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        name='email'
                        className="input" 
                        placeholder="Email" />

                        <label className="label">Password</label>
                        <input 
                        type="password" 
                        name='password'
                        className="input" 
                        placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Log In</button>
                        </fieldset>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;