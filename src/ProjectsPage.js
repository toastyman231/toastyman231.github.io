import superRPG from "./Images/superherorpg.gif";
import hyper from "./Images/HyperflightPoster.jpg";
import idle from "./Images/idlebreakout.png"

import ReactPlayer from 'react-player'

const isMobile = window.innerWidth <= 768;
const imageList = [superRPG, hyper, idle];

const ProjectsPage = () => {
    return (
        <div className="content-container overflow-y-scroll h-screen text-white">
            <div className="text-bold text-5xl text-center pt-5">
                My Projects
            </div>

            <div className="flex flex-col items-center px-1 py-5">
                <div className="pb-2">
                    <Project projectName="Based Engine - Custom Game Engine written in C++"
                        projectDesc="A custom game engine I wrote using C++, OpenGL, SDL2, and more in order to improve my skills with C++. It 
                        features text rendering with SDL, an entity-component system that automatically renders entities with Renderer components, 
                        easy support for custom icons, sprite rendering with materials, and more to come. I also wrote a custom toolchain for it using python
                        which allows users to easily generate new projects from a template."
                        link="https://github.com/toastyman231/BasedEngine" />
                </div>

                <div className="pb-2">
                    <VideoProject projectName="Time Stop Power Demo"
                        projectDesc="This project showcases a simple time stopping gameplay mechanic, created using Unity's timescale feature. 
                        I also used it to play around with some shader effects, such as the URP fullscreen shader shown whenever time is stopped." 
                        width={960} height={540} hasScreenshot={true} videoLink="videos/TimeStopRecording_004.mp4" link="https://github.com/toastyman231/TimeStopPower" />
                </div>

                <div className="pb-2">
                    <VideoProject projectName="MAGELLAN: Remastered"
                        projectDesc="This is a remake of a project from high school, MAGELLAN: The Game. 
                        It takes inspiration from The Oregon Trail, and players will experience sailing the high seas, trading with natives, hunting for food, 
                        discovering new places, and more!" width={960} height={540}
                        hasScreenshot={true} videoLink="https://www.youtube.com/embed/7PHp28iHcG4" link="https://github.com/toastyman231/MAGELLAN-Remastered" />
                </div>

                <div className="pb-2">
                    <Project projectName="Idle Breakout, but Epic" 
                        projectDesc="This is my final project for my Intro to Games Programming class. It's a clone of Idle Breakout by Kodiqi, and I used it
                        to learn Unity's Entity Component System."
                        imageID={2} hasScreenshot={true} link="https://github.com/toastyman231/IdleBreakoutButEpic"
                        itchLink="https://toastyman231.itch.io/idle-breakout-but-epic" />
                </div>

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

const Project = ({projectName, projectDesc, imageID, width, height, hasScreenshot, link, buttonText="View on GitHub", itchLink="", itchButton="View on Itch.io"}) => {
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
                
            <div className="pb-3">
                {itchLink!=="" ? 
                <button onClick={()=>{window.open(
                                        itchLink,
                                        '_blank' // <- This is what makes it open in a new window.
                                    );}} 
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    {itchButton}</button> : null}
            </div> 
        </div>
    );

    
}

const VideoProject = ({projectName, projectDesc, width, height, hasScreenshot, videoLink, link, buttonText="View on GitHub"}) => {
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
                <ReactPlayer url={videoLink} playing={true} loop={true} width={width} height={height} />
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