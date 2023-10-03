import Ad from "./Ad";
import FindUsOn from "./FindUsOn";
import LoginWith from "./LoginWith";
import QZoon from "./QZoon";



const RightSideNav = () => {
    return (
        <div className="space-y-5">
            <LoginWith></LoginWith>
            <FindUsOn></FindUsOn>
            <QZoon></QZoon>
            <Ad></Ad>
        </div>
    );
};

export default RightSideNav;