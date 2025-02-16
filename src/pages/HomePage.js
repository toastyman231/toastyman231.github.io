import Cookies from "universal-cookie";
import jake from "../Images/jake_photo.jpg";
import { UpdateAll } from "./SideBar";

let page;
const cookies = new Cookies();
const isMobile = window.innerWidth <= 768;

const HomePage = ({pageSetter}) => {
    page = pageSetter;

    return (
        <Content />
    );
};

const Divider = () => <hr className="sidebar-hr pt-5" />;

const Content = () => {
    return (
        <div className={isMobile ? "content-container h-screen overflow-y-scroll" : "content-container overflow-y-scroll"}>
            <div className={isMobile ? "text-white text-center font-bold text-5xl pt-4" : "text-white text-center font-bold text-7xl pt-4"}>
                Jake Morgenstern
                <div className={isMobile ? "text-white font-thin text-center text-xl pt-5" : "text-white font-thin text-center text-5xl pt-5"}> 
                    Game Developer and Student at Indiana University
                    <div className={isMobile ? "flex flex-col items-center" : "flex overflow-auto items-center pt-10"}>
                        <div className={isMobile ? "object-center pt-5" : "flex flex-grow object-left pl-10 pr-10"}>
                            <img src={jake} alt="Jake Morgenstern headshot" width={1728} height={2304} />
                        </div>

                        <div className={isMobile ? "text-lg font-bold text-center pl-5 pr-5 pt-5" : "text-lg font-bold text-center pr-[200px] pt-5"}>
                            Hi, my name is Jake Morgenstern, and I'm a game development and computer science student at Indiana University
                            Bloomington with experience in Unreal Engine 5 and Unity. Currently I'm working on Decomposition, an analog horror game.
                            Use the bar on the left to explore my projects, learn more about me, or get in contact. If you want to take a look
                            at what I've done, click the button below to view my Github.

                            <Divider />

                            <div className="flex flex-col items-center">
                                <button onClick={()=>{UpdateAll(page, "Projects", undefined, undefined, cookies);}} 
                                        className="button mb-4">
                                            View my Projects!</button>
                                <button onClick={()=>{window.open(
                                            'https://www.github.com/toastyman231',
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                                        className="button mb-4">
                                            View my GitHub!</button>
                                <button onClick={()=>{window.open(
                                            'https://toastyman231.itch.io/',
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                                        className="button mb-4">
                                            View my Itch.io!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;