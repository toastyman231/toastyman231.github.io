import { NavLink, useParams } from "react-router";
import { firebaseDB } from "../App";
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState, useCallback } from "react";

import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player'
import { customRenderItem, PlayerSlide } from "./ProjectsPage";

import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {MoonLoader} from 'react-spinners';

const Project = () => {
    const [project, setProject] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(true);
    let params = useParams();
    const projectId = params.projectID;
    const projectName = project["project-name"];
    const projectDesc = project["long-description"];
    const links = project["project-links"];
    const content = project.content;
    const buttonText = project["button-text"] ?? "View on Github";
    const secondBtnText = project["second-text"] ?? "View on Itch";

    const refreshProject = async () => {
        const docRef = doc(firebaseDB, "projects", projectId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log("Data: " + data);
                    setProject(data);
                    setLoading(false);
                } else {
                    console.log("No such document!");
                    window.open("https://www.toastyman231.github.io/error", "_self");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
                window.open("https://www.toastyman231.github.io/error", "_self");
            });
    }

    const isMobile = width <= 768;

    const handleWindowSizeChange = useCallback(() => {
            setWidth(window.innerWidth);
        }, []);

    useEffect(() => {
            refreshProject();
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }, [handleWindowSizeChange])
    
    // TODO: Replace react-responsive-carousel with react-multi-carousel to see if it fixes overdraw
    if (isLoading) return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <MoonLoader />
        </div>);
    else return (
        <div className="content-container overflow-y-scroll h-screen flex flex-col items-center">
            <div className="text-white text-center text-lg font-bold lg:object-center flex flex-col items-center lg:w-[65vw]">
                <div className="text-3xl">
                    {projectName}
                </div>

                <div className="inline lg:hidden mx-2 my-2 border-none" />
                
                <div className="text-base text-justify p-2 border-none">
                    {projectDesc}
                </div>

                <Carousel renderItem={customRenderItem} className="m-2" showThumbs={false}>
                    {content.map(item => (
                        item.includes("png") || item.includes("jpg") || item.includes("jpeg") ?
                        <img src={item} className="w-full h-full" /> :
                        <PlayerSlide url={item} loop={true} volume={0} isMobile={isMobile}/>
                    ))}
                </Carousel>

                <div className="flex flex-col md:flex-row w-max">
                    {links[0] !== "" && links[0] !== "none" && links[0] !== undefined ?
                        <button onClick={()=>{window.open(
                            links[0],
                            '_blank' // <- This is what makes it open in a new window.
                            );}} 
                        className="button m-2 max-w-fit">
                        {buttonText}</button> : null}

                    {links[1] !== "" && links[1] !== undefined ? 
                        <button onClick={()=>{window.open(
                            links[1],
                            '_blank' // <- This is what makes it open in a new window.
                        );}} 
                        className="button m-2 max-w-fit">
                        {secondBtnText}</button> : null} 

                    <NavLink to="/projects" className="button m-2">Back</NavLink>
                </div>
            </div>
        </div>
    );
}


export default Project;