import SpongebobCrying from '../Images/spongebob-cry.gif'
import { NavLink } from "react-router";

const PageNotFound = () => {
    return (
        <div className={"content-container h-fill w-screen m-0 flex flex-col items-center"}>
            <p className="text-white text-center font-bold text-7xl pt-4">That page does not exist!</p>
            <img src={SpongebobCrying} width={500} className="m-8" />
            <NavLink to="/" end className="button">Return to Home</NavLink>
        </div>
    );
}

export default PageNotFound;