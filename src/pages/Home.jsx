import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSideNav from "../components/LeftSideNav";
import Navbar from "../components/Navbar";
import RightSideNav from "../components/RightSideNav";
import NewsCard from "../components/NewsCard";


const Home = () => {
    const newses = useLoaderData();

    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold ">Dragon News Home</h2>
                    {
                        newses?.map(news => <NewsCard
                            key={news._id}
                            news={news}></NewsCard>)
                    }
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;