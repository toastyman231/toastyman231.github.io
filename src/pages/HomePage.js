import Cookies from "universal-cookie";
import jake from "../images/jake_headshot2.jpg";
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
                    <div className="flex flex-col justify-center md:flex-row lg:flex-row items-center md:items-start 
                                    md:pt-10 lg:pt-10 lg:overflow-auto">
                        <div className="m-2 mt-9">
                            <img src={jake} alt="Jake Morgenstern headshot" 
                            className="outline outline-white rounded-md w-[400px]" />
                        </div>

                        <div className="text-lg font-bold text-justify mx-2 mb-2 mt-[-0.5rem] w-fit">
                            <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
                                <div className="flex flex-col items-start lg:items-center md:m-2">
                                    <div className="text-center mx-2 w-full">Top Projects</div>
                                    <ExternalProjectCard projectId={"0DucClRh5hcAyMKrtkpi"} page={page} cookies={cookies} />
                                    <ExternalProjectCard projectId={"1Alu9ABy4caKJoUJMIqx"} page={page} cookies={cookies} />
                                    <ExternalProjectCard projectId={"1kKlmOhsB5Vk45GWqDzK"} page={page} cookies={cookies} />
                                </div>

                                <div className="flex flex-col items-center md:items-start md:flex-col-reverse justify-evenly 
                                                m-2 md:mt-[-0.25rem]">
                                    <button onClick={()=>{UpdateAll(page, "Projects", undefined, undefined, cookies);}} 
                                                className="button w-[200px] m-2">
                                                    View my Projects!</button>
                                    <button onClick={()=>{window.open(
                                                'https://www.github.com/toastyman231',
                                                '_blank' // <- This is what makes it open in a new window.
                                            );}} 
                                            className="button w-[200px] m-2">
                                                View my GitHub!</button>
                                    <button onClick={()=>{window.open(
                                                'https://toastyman231.itch.io/',
                                                '_blank' // <- This is what makes it open in a new window.
                                            );}} 
                                            className="button w-[200px] m-2">
                                                View my Itch.io!</button>
                                    <button onClick={()=>{window.open(
                                                'https://toastyman231.itch.io/',
                                                '_blank' // <- This is what makes it open in a new window.
                                            );}} 
                                            className="button w-[200px] m-2">
                                                View my Resume!</button>
                                    <p className="m-2">
                                        <p className="italic">Software: <br/></p>
                                        <p className="indent-6">- Unreal Engine 5 <br/></p>
                                            <p className="indent-12">- Blueprints/C++ <br/></p>
                                        <p className="indent-6">- Unity <br/></p>
                                        <p className="indent-6">- Git/Perforce <br/></p>
                                        <p className="italic">Languages: <br/></p>
                                        <p className="indent-6">- C++ <br/></p>
                                        <p className="indent-6">- C# <br/></p>
                                        <p className="indent-6">- Java <br/></p>
                                        <p className="indent-6">- GLSL/HLSL <br/></p>
                                    </p>
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