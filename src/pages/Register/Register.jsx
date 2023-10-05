import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


        //create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-2xl">Register</h2>
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered" required />
                        {/* <label className="label"> */}
                            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                        {/* </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white font-bold">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have account? Please <Link className="font-bold text-blue-600" to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;