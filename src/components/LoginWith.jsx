import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWith = () => {
    return (
        <div className="px-3">
            <h3 className="text-xl font-semibold my-4">Login With</h3>
            <div className="space-y-2">
                <Link className="btn w-full btn-outline"><FaGoogle></FaGoogle> Login in With Google</Link>
                <Link className="btn w-full btn-outline"><FaGithub></FaGithub> Login in With Github</Link>
            </div>
        </div>
    );
};

export default LoginWith;