
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                const user = { email };
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(data => {
                        console.log(data.data);
                        if (data.data.success) {
                            navigate(location?.state ? location.state : '/')
                        }
                    })

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
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-5xl font-bold text-white">Login!</h1>
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
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className='text-[#a6ad9a] px-8 pb-8'><small>New to this website? <Link className='link-hover text-orange-700' to={'/signup'}>SignUp now</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;