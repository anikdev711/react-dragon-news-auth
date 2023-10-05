import { useParams } from "react-router-dom";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";


const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-extrabold">Dragon News</h2>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <p>{id}</p>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;