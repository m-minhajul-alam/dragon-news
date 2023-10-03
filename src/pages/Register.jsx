import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
    
    const hendelRegister = (e) => {
        e.preventDefault();

        // const name = e.target.name.value;
        // const url = e.target.url.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, url, email, password);

        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        console.log(from.get('email'));

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl font-semibold text-center mt-7">Register Your Account</h2>
                <div className="md:w-3/4 lg:w-2/5 mx-auto">
                    <form onSubmit={hendelRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            {/* name input */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>

                            {/* photo url input */}
                            <input
                                type="url"
                                name="url"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required
                            />

                        </div>

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
                        </div>

                        <div className="gap3">
                            <input type="checkbox" required />
                            <span className="text-sm ml-2">Accept Term & Conditions</span>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-active">Register</button>
                        </div>
                    </form>
                    <p className="text-xs text-center">Alredy have account? <Link className="text-blue-600 hover:underline" to={"/login"}>Login</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Register;