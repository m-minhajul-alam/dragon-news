import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provisers/AuthProvider";

const Login = () => {

    const { logIn } = useContext(AuthContext);

    const hendelLogin = (e) => {
        e.preventDefault();

        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        // console.log(e.currentTarget);

        const from = new FormData(e.currentTarget)
        const email = (from.get('email'));
        const password = (from.get('password'));

        console.log(email, password);

        // login
        logIn(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl font-semibold text-center mt-7">Login Your Account</h2>
                <div className="md:w-3/4 lg:w-2/5 mx-auto">
                    <form onSubmit={hendelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            {/* email input */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            {/* password input */}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />

                            <label className="label">
                                <Link to={"/"} className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-active">Login</button>
                        </div>
                    </form>
                    <p className="text-xs text-center">Do not have account? <Link className="text-blue-600 hover:underline" to={"/register"}>Register</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Login;