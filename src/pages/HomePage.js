import Cookies from "universal-cookie";
import jake from "../images/jake_photo.jpg";
import { UpdateAll } from "./SideBar";
import { ExternalProjectCard } from "./ProjectsPage";

let page;
const cookies = new Cookies();

const HomePage = ({pageSetter}) => {
    page = pageSetter;

    return (
        <Content />
    );
};

const Divider = () => <hr className="sidebar-hr pt-5" />;

const Content = () => {
    return (
        <div className= "content-container overflow-y-scroll h-screen">
            <div className="text-white text-center font-bold pt-4 text-5xl md:text-7xl lg:text-7xl">
                Jake Morgenstern
                <div className="text-white font-thin text-center pt-5 text-3xl md:text-5xl lg:text-5xl sm:pb-5 "> 
                    Gameplay and Engine Programmer
                    <div className="flex flex-col md:flex-row lg:flex-row items-start md:pt-10 lg:pt-10 lg:overflow-auto">
                        <div className="lg:flex lg:flex-grow lg:object-left lg:px-10">
                            <img src={jake} alt="Jake Morgenstern headshot" className="p-2 md:p-10 lg:p-0 pt-5 md:pt-10 lg:pt-0 lg:w-[1728px]" />
                        </div>

                        <div className="text-lg font-bold text-justify p-5 md:pr-10 lg:pr-20">
                            Hi, my name is Jake Morgenstern, and I'm a gameplay programmer with experience in Unreal Engine 5 and Unity. Currently I'm working on Desecration, 
                            an analog horror game. I'm also working on my own custom C++ game engine, and a game to go along with it.
                            Use the bar on the left to explore my projects, learn more about me, or get in contact. If you want to take a look
                            at what I've done, click the button below to view my Github.

                            <Divider />

                            <div className="text-center">Top Projects</div>
                            <div className="flex flex-col md:flex-row items-center md:items-start">
                                <div>
                                    <ExternalProjectCard projectId={"0DucClRh5hcAyMKrtkpi"} />
                                    <ExternalProjectCard projectId={"1Alu9ABy4caKJoUJMIqx"} />
                                    <ExternalProjectCard projectId={"1kKlmOhsB5Vk45GWqDzK"} />
                                </div>

                                <div className="flex flex-col items-center pt-4">
                                    <button onClick={()=>{UpdateAll(page, "Projects", undefined, undefined, cookies);}} 
                                            className="button mb-4 w-[200px]">
                                                View my Projects!</button>
                                    <button onClick={()=>{window.open(
                                                'https://www.github.com/toastyman231',
                                                '_blank' // <- This is what makes it open in a new window.
                                            );}} 
                                            className="button mb-4 w-[200px]">
                                                View my GitHub!</button>
                                    <button onClick={()=>{window.open(
                                                'https://toastyman231.itch.io/',
                                                '_blank' // <- This is what makes it open in a new window.
                                            );}} 
                                            className="button mb-4 w-[200px]">
                                                View my Itch.io!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;