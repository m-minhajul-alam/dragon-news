import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div className="px-3">
            <h3 className="text-xl font-semibold my-4">Login With</h3>
            <div>
                <a className="flex items-center gap-3 py-3 w-full border rounded-t-lg pl-3" href="https://www.facebook.com/"><FaFacebook></FaFacebook> Facebook</a>
                <a className="flex items-center gap-3 py-3 w-full border-x pl-3" href="https://twitter.com/"><FaTwitter></FaTwitter> Twitter</a>
                <a className="flex items-center gap-3 py-3 w-full border rounded-b-lg pl-3" href="https://www.instagram.com/"><FaInstagram></FaInstagram> Instagram</a>
            </div>
        </div>
    );
};

export default FindUsOn;