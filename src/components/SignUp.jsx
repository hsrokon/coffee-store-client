import { useContext, useState } from "react";
// import useInputState from "../utils/controlledFormHook";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";



const SignUp = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    // const passState = useInputState();
    // const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        // const displayName = e.target.name.value;
        // const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.pass.value;
        // const password = passState.value;

        createNewUser(email, password)
        .then(credential =>{
            const user = credential.user;
            setUser(user)
            // updateUserProfile(displayName, photoURL)
            // .then()
            // .catch(error => {
            //     console.log('Profile update error', error);
            // })
            // navigate('/')
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        
    }

    const [ showPass, setShowPass ] = useState(false)

    return (
        <div className="min-h-screen flex flex-col">

            <Link to={'/'}><h2 className="pl-30 pt-10 text-xl font-bold self-start text-base-content">&#10095; Home</h2></Link>

            <div className="flex flex-1 flex-col gap-2 md:gap-4 items-center justify-center">
                <h2 className="text-2xl font-semibold">Sign Up</h2>
                <div className="card bg-primary w-[19rem] md:w-full max-w-sm shrink-0 rounded-2xl shadow-2xl shadow-primary text-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset gap-0.5 md:gap-1.5">

                        {/* <label className="text-sm">Name</label>
                        <input 
                        type="text" 
                        name="name"
                        className="input rounded-2xl text-base-content" 
                        placeholder="Name" />

                        <label className="text-sm">Photo URL</label>
                        <input 
                        type="text" 
                        name="photo"
                        className="input rounded-2xl text-base-content" 
                        placeholder="Profile photo URL" /> */}

                        <label className="text-sm">Email</label>
                        <input 
                        type="email" 
                        required
                        name="email"
                        className="input rounded-2xl text-base-content" 
                        placeholder="Email" />

                        <label className="text-sm">Password</label>
                        <div className="relative">
                            <input 
                            type={`${showPass ? 'text' : 'password'}`} 
                            name="pass"
                            required
                            className="input rounded-2xl text-base-content" 
                            placeholder="Password" />
                            <button 
                            onClick={()=> setShowPass(!showPass)}
                            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-base-content text-lg z-20">
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye/>
                                }</button>
                        </div>
                        
                        <button className="btn btn-primary text-white border-base-100 rounded-2xl mt-4">Sign Up</button>
                        </fieldset>
                        <p className="text-center text-sm">Already have an account? 
                            <Link to={'/login'} className="underline font-semibold">Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;