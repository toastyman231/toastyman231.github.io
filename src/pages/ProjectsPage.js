import React, { useCallback } from 'react';
import Popup from 'reactjs-popup';
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from 'react';
import { firebaseDB } from "../App";
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { UpdateAll } from "./SideBar";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [activeProject, setActiveProject] = useState(null);
    const openPopup = (projectId) => {
        setActiveProject(projectId);
        console.log("Active project: " + projectId);
    }
    const closePopup = () => {
        console.log("Closing project " + activeProject);
        setActiveProject(null);
    }
    const isMobile = width <= 768;

    const handleWindowSizeChange = useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    const refreshProjects = async () => {
        const querySnapshot = await getDocs(collection(firebaseDB, "projects"));
        let tempProjects = []
        querySnapshot.forEach((doc) => tempProjects.push(doc.data()))
        setProjects(tempProjects)
    }

    useEffect(() => {
        refreshProjects();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [handleWindowSizeChange])

    return (
        <div className="content-container overflow-y-scroll h-screen text-white">
            <div className="text-bold text-5xl text-center pt-5">
                My Projects
            </div>

            <div className="flex flex-col items-center px-1 py-5">
                <ul>
                    {projects.map((project, index) => 
                    <li onClick={() => openPopup(index)} key={index} className="pb-4 cursor-pointer">
                        <div className="bg-gray-900 pt-4 pb-4 flex flex-col md:flex-row lg:flex-row items-center 
                                rounded-md transition hover:transition-all hover:duration-100 hover:outline hover:outline-white">
                            <div className="px-4">
                                <img src={project.thumb} width={380} height={180} className="rounded-md" />
                            </div>
                            <div className="flex flex-grow flex-col items-center px-10">
                                <p className="text-white text-center text-3xl font-bold w-full rounded-md pt-2">{project["project-name"]}</p>
                                <p className="text-white text-center text-sm w-full rounded-md pt-2">{project["short-description"]}</p>
                                <p className="text-white text-center text-sm w-full rounded-md pt-2">Type: {project.type ?? "Demo"}</p>
                                <p className="text-white text-center text-sm w-full rounded-md pt-2">Role: {project.role ?? "Programmer"}</p>
                            </div>
                        </div>

                        <Popup
                            modal position="center" open={activeProject === index} onClose={closePopup}
                            contentStyle={
                                isMobile ? 
                                    {backgroundColor: "#202225", borderRadius: "6px", paddingTop: "16px",
                                    paddingBottom: "16px", color: "#FFFFFF", width: "95vw", height: "fit-content",
                                    overflowY: "scroll", alignContent: "center"} : 
                                    {backgroundColor: "#202225", borderRadius: "6px", paddingTop: "16px",
                                    paddingBottom: "16px", color: "#FFFFFF", width: "fit-content", height: "fit-content",
                                    overflowY: "scroll", alignContent: "center", maxHeight: "95%"}}>
                            <ProjectCard projectName={project["project-name"]} projectDesc={project["long-description"]} 
                            link={project["project-links"][0]} isMobile={isMobile} secondLink={project["project-links"][1]} hasScreenshot={true} content={project.content} 
                            videoLink={project.content[0]} volume={0} closePopup={closePopup} buttonText={project["button-text"] ?? "View on Github"} 
                            secondBtnText={project["second-text"] ?? "View on Itch"}/>
                        </Popup>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

// Wrapper for putting videos in Carousels, to prevent them from playing when not selected on the carousel
const PlayerSlide = ({url, isSelected, loop, volume, isMobile}) => (
    <ReactPlayer width={url.includes("youtube") ? isMobile ? "100%" : 960 : "100%"} height={url.includes("youtube") ? isMobile ? "100%" : 540 : "100%"} volume={volume} loop={loop} url={url} playing={isSelected} />
);
// Black magic I got off the carousel docs
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />

// Popup to view a given project
const ProjectCard = ({projectName, projectDesc, volume, link, content, closePopup, isMobile, secondLink="", secondBtnText="View on Itch", buttonText="View on GitHub"}) => {
    return (
        <div className="bg-gray-900 text-white text-center text-lg font-bold w-full lg:object-center lg:max-w-[1000px] lg:px-4 rounded-md pt-2 max-h-[95vh]">
            <div className="sm:divide-y md:relative lg:relative">
                <div className="text-3xl">
                    {projectName}
                </div>

                <div className="mx-2 my-2 border-none" />
                
                <div className="text-base text-justify p-2 border-none">
                    {projectDesc}
                </div>

                <Carousel renderItem={customRenderItem} className="p-2 border-none" showThumbs={false}>
                    {content.map(item => (
                        item.includes("png") || item.includes("jpg") || item.includes("jpeg") ?
                        <img src={item} className="w-full h-full" /> :
                        <PlayerSlide url={item} loop={true} volume={volume} isMobile={isMobile}/>
                    ))}
                </Carousel>

                <div className="pb-3 border-none">
                    {link !== "" && link !== "none" ?
                    <button onClick={()=>{window.open(
                                            link,
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {buttonText}</button> : null}
                </div>

                <div className="pb-3 border-none">
                    {secondLink!=="" ? 
                    <button onClick={()=>{window.open(
                                            secondLink,
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {secondBtnText}</button> : null}
                </div> 
                
                <button onClick={closePopup} className='button border-none sticky w-full left-1/2 bottom-0'>Back</button>
            </div>
        </div>
    );
}

export const ExternalProjectCard = ({projectId, sizeX = 190, sizeY = 90, page, cookies}) => {
    const [project, setProject] = useState([]);

    const refreshProjects = async () => {
        const docRef = doc(firebaseDB, "projects", projectId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                const data = docSnap.data();
                console.log("Data: " + data);
                setProject(data);
                } else {
                console.log("No such document!");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            });
    }

    useEffect(() => {
        refreshProjects();
    }, []);

    return (
        <div className="bg-gray-900 my-2 py-4 flex flex-col md:flex-col lg:flex-row items-center 
                                rounded-md transition hover:transition-all hover:duration-100 hover:outline hover:outline-white
                                w-full lg:max-w-[500px]"
            onClick={()=>{UpdateAll(page, "Projects", undefined, undefined, cookies);}}>
            <div className="px-4">
                <img src={project.thumb} width={sizeX} height={sizeY} className="rounded-md" />
            </div>
            <div className="flex flex-grow flex-col items-center px-10">
                <p className="text-white text-center text-3xl font-bold w-full rounded-md">{project["project-name"]}</p>
                <p className="text-white text-center text-sm w-full rounded-md pt-2">{project["short-description"]}</p>
                <p className="text-white text-center text-sm w-full rounded-md">Type: {project.type ?? "Demo"}</p>
                <p className="text-white text-center text-sm w-full rounded-md">Role: {project.role ?? "Programmer"}</p>
            </div>
        </div>
    );
}

export default ProjectsPage;