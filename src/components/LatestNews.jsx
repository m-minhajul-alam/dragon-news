import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex py-2 px-2 bg-gray-300 my-7">
            <button className="text-lg font-medium py-1 px-4 bg-red-500 text-white">Lates</button>
            <Marquee className="text-black" pauseOnHover={true}>
                <Link className="mx-6" to={'/newsDetail'}>no.1 I can be a React component, multiple React components, or ...</Link>
                <Link className="mx-6" to={'/newsDetail'}>no.2 I can be a React component, multiple React components, or ...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;