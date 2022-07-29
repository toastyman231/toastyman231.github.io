import superRPG from "./Images/superherorpg.gif";
import hyper from "./Images/HyperflightPoster.jpg";

const isMobile = window.innerWidth <= 768;
const imageList = [superRPG, hyper];

const ProjectsPage = () => {
    return (
        <div className="content-container overflow-y-scroll h-screen text-white">
            <div className="text-bold text-5xl text-center pt-5">
                My Projects
            </div>

            <div className="flex flex-col items-center px-1 py-5">
                <div className="pb-2">
                    <Project projectName="Untitled Action RPG with Unity" 
                        projectDesc="This is a personal project I started for fun. The game is currently incomplete, but when finished 
                        it will be an action RPG with a crafting based power system. Players can run on walls, throw lightning, 
                        command powerful abilities, and more!" 
                        imageID={0} hasScreenshot={true} link="https://www.github.com/toastyman231/SuperheroRPG" />
                </div>
                
                <div className="pb-2">
                    <Project projectName="Portfolio Website Powered by React"
                        projectDesc="This website! The site was built with React and Tailwind CSS, following a guide by fireship.io.
                        It uses HeroTofu for its mail server when sending messages through the Contact page, and the full code can be
                        found on my GitHub."
                        link="https://www.github.com/toastyman231/toastyman231.github.io" />
                </div>

                <div className="pb-2">
                    <Project projectName="HyperFlight - Arcade Action Game made with Unreal"
                            projectDesc="I worked on this project as part of a team at a game design camp. I mainly did the art, but I
                            also worked with Unreal to assist with the code. Working on this game taught me a lot about working with a team
                            as well as about aspects of game development besides coding."
                            imageID={1} hasScreenshot={true} link="https://drive.google.com/drive/folders/16VW69HxGZtcEg7HmEY0cYGyjc1WH5W3O?usp=sharing"
                            width={isMobile ? window.innerWidth : "330"} height="510" buttonText="Download the Game" />
                </div>
            </div>
        </div>
    );
};

const Project = ({projectName, projectDesc, imageID, width, height, hasScreenshot, link, buttonText="View on GitHub"}) => {
    return (
        <div className={
            isMobile ? "bg-gray-900 text-white text-center text-lg font-bold w-full rounded-md pt-2" 
            : "bg-gray-900 text-white text-center text-lg font-bold w-[1000px] object-center rounded-md pt-2"
        }>
            <div className={isMobile ? "divide-y" : ""}>
                <div>
                    {projectName}
                </div>
                
                <div className={isMobile ? "text-base px-1 pt-1" : "text-base"}>
                    {projectDesc}
                </div>
            </div>

            <div className="flex flex-col items-center px-2 py-2">
                {hasScreenshot ? (<img src={imageList[imageID]} alt="Project screenshot" width={width} height={height} />) : null}
            </div>

            <div className="pb-3">
                <button onClick={()=>{window.open(
                                        link,
                                        '_blank' // <- This is what makes it open in a new window.
                                    );}} 
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    {buttonText}</button>
            </div> 
        </div>
    );
}

export default ProjectsPage;