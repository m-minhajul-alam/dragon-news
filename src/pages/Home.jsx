import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import Navbar from "../components/Navbar";
import RightSideNav from "../components/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-center">This is Home Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-center">All Newses</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;