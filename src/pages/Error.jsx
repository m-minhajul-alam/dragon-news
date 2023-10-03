import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="my-56">
            <h1 className="text-6xl font-bold mb-6 text-center">404 Error</h1>
            <div className="flex justify-center">
                <Link className="btn btn-error" to={'/'}>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;