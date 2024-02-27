import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
              e.target.reset();
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-[#F1F1F1] my-5 rounded">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-12 mb-6 lg:mb-0 w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold text-white">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-white" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-[#a6ad9a] px-8 pb-8'><small>Already have an account? <Link className='link-hover text-orange-700' to={'/login'}>Login now</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;