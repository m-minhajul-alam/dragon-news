import { Link } from "react-router-dom";
import qZoon1 from "../assets/qZone1.png"
import qZoon2 from "../assets/qZone2.png"
import qZoon3 from "../assets/qZone3.png"

const QZoon = () => {
    return (
        <div className="p-3 bg-gray-300">
            <h3 className="text-xl font-semibold pb-3 text-black">Q-Zoon</h3>
            <div>
                <Link><img src={qZoon1} alt="" /></Link>
                <Link><img src={qZoon2} alt="" /></Link>
                <Link><img src={qZoon3} alt="" /></Link>
            </div>
        </div>
    );
};

export default QZoon;