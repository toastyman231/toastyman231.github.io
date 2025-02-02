import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from 'react';
import { firebaseDB } from "./App";
import { collection, getDocs } from 'firebase/firestore';

const isMobile = window.innerWidth <= 768;

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const popupRef = useRef();
    const closePopup = () => popupRef.current.close();

    const refreshProjects = async () => {
        const querySnapshot = await getDocs(collection(firebaseDB, "projects"));
        let tempProjects = []
        querySnapshot.forEach((doc) => tempProjects.push(doc.data()))
        setProjects(tempProjects)
        //console.log("Refreshing project list!")
    }

    useEffect(() => {
        refreshProjects();
    }, [])

    return (
        <div className="content-container overflow-y-scroll h-screen text-white">
            <div className="text-bold text-5xl text-center pt-5">
                My Projects
            </div>

            <div className="flex flex-col items-center px-1 py-5">
                <ul>
                    {projects.map(project => 
                    <li className="pb-4 cursor-pointer">
                        <Popup trigger={
                            <div className={
                                isMobile ? 
                                    "bg-gray-900 pt-4 pb-4 flex flex-col items-center rounded-md transition hover:transition-all hover:duration-100 hover:outline hover:outline-white" : 
                                    "bg-gray-900 pt-4 pb-4 flex flex-row items-center rounded-md transition hover:transition-all hover:duration-100 hover:outline hover:outline-white"}>
                                <div className="px-4">
                                    <img src={project.thumb} width={380} height={180} className="rounded-md" />
                                </div>
                                <div className="flex flex-grow flex-col items-center px-10">
                                    <p className="text-white text-center text-3xl font-bold w-full rounded-md pt-2">{project["project-name"]}</p>
                                    <p className="text-white text-center text-sm w-full rounded-md pt-2">{project["short-description"]}</p>
                                </div>
                            </div>} 
                            modal position="center" ref={popupRef}
                            contentStyle={
                                isMobile ? 
                                    {backgroundColor: "#202225", borderRadius: "6px", paddingTop: "16px",
                                    paddingBottom: "16px", color: "#FFFFFF", width: "95vw", height: "95vh",
                                    overflowY: "scroll"} : 
                                    {backgroundColor: "#202225", borderRadius: "6px", paddingTop: "16px",
                                    paddingBottom: "16px", color: "#FFFFFF", width: "fit-content", height: "95vh",
                                    overflowY: "scroll"}}>
                            <ProjectCard projectName={project["project-name"]} projectDesc={project["long-description"]} 
                            link={project["project-links"][0]} secondLink={project["project-links"][1]} hasScreenshot={true} content={project.content} 
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
const PlayerSlide = ({url, isSelected, loop, volume}) => (
    <ReactPlayer width={url.includes("youtube") ? isMobile ? "100%" : 960 : "100%"} height={url.includes("youtube") ? isMobile ? "100%" : 540 : "100%"} volume={volume} loop={loop} url={url} playing={isSelected} />
);
// Black magic I got off the carousel docs
const customRenderItem = (item, props) => <item.type {...item.props} {...props} />

// Popup to view a given project
const ProjectCard = ({projectName, projectDesc, volume, link, content, closePopup, secondLink="", secondBtnText="View on Itch", buttonText="View on GitHub"}) => {
    return (
        <div className={
            isMobile ? "bg-gray-900 text-white text-center text-lg font-bold w-full rounded-md pt-2" 
            : "bg-gray-900 text-white max-w-[1000px] px-4 text-center text-lg font-bold object-center rounded-md pt-2"
        }>
            <div className={isMobile ? "divide-y" : "relative"}>
                <div className="text-3xl">
                    {projectName}
                </div>

                <hr className="sidebar-hr-white my-2" />
                
                <div className={isMobile ? "text-base px-1 pt-1" : "text-base"}>
                    {projectDesc}
                </div>

                <Carousel renderItem={customRenderItem} className="px-2 py-2" showThumbs={false}>
                    {content.map(item => (
                        item.includes("png") || item.includes("jpg") || item.includes("jpeg") ?
                        <img src={item} className="w-full h-full" /> :
                        <PlayerSlide url={item} loop={true} volume={volume}/>
                    ))}
                </Carousel>

                <div className="pb-3">
                    {link !== "" && link !== "none" ?
                    <button onClick={()=>{window.open(
                                            link,
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {buttonText}</button> : null}
                </div>

                <div className="pb-3">
                    {secondLink!=="" ? 
                    <button onClick={()=>{window.open(
                                            secondLink,
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        {secondBtnText}</button> : null}
                </div> 
                
                <button onClick={closePopup} className='button sticky w-full left-1/2 bottom-0'>Back</button>
            </div>
        </div>
    );
}

export default ProjectsPage;