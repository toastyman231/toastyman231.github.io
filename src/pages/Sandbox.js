import { NavLink, useParams } from "react-router";
import { firebaseDB } from "../App";
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState, useCallback, useRef } from "react";

import { Carousel } from "react-responsive-carousel";
import { customRenderItem, PlayerSlide } from "./ProjectsPage";

import parse from 'html-react-parser';

import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {MoonLoader} from 'react-spinners';
import ContentToggle from "../components/ContentToggle";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Popup from "reactjs-popup";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const Sandbox = () => {
    const [project, setProject] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [isLoading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const closePopup = () => setOpen(false);
    const [imageId, setImageId] = useState(0);

    const params = useParams();
    const projectId = params.projectID;
    const projectName = project["project-name"];
    const projectDesc = project["long-description"];
    const projectExtraDesc = project["extra-description"];
    const role = project["role"] ?? "Solo Project";
    const type = project["type"] ?? "Solo Project";
    const teamSize = project["team-size"] ?? "Solo";
    const links = project["project-links"];
    const content = project.content;
    const tooltips = project.tooltips;
    const myCredits = project["my-credits"];
    const technologies = project.technologies;
    const thumbnail = project.thumbnail ?? {link: null, artist: null};
    const thumbnailLink = thumbnail.link ?? 'https://toastyman231.github.io/';
    const thumbnailArtist = thumbnail.artist ?? 'Myself';
    const buttonText = project["button-text"];

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
    const handleClick = useCallback(() => {
        console.log("CLICKED!");
        if (open) closePopup();
    }, []);

    useEffect(() => {
            refreshProject();
            window.addEventListener('resize', handleWindowSizeChange);
            window.addEventListener('click', handleClick);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
                window.removeEventListener('click', handleClick);
            };
        }, [handleWindowSizeChange])
    
    if (isLoading) return (
        <div className="content-container flex flex-col w-screen h-screen justify-center items-center text-white">
            <MoonLoader />
            Fetching project data...
        </div>);
    else return (
        <div className="content-container overflow-y-scroll h-screen flex flex-col items-center">
            <div className="text-white text-center text-lg font-bold lg:object-center flex flex-col items-center lg:w-[65vw]">
                <div className="text-3xl">
                    {projectName}
                </div>

                <div className="text-base text-justify p-2 border-none">
                    <div className="grid sm:grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-x-8 gap-y-0 text-left">
                        <div className="font-normal">
                            <div className="inline font-bold">Role:</div> {role}
                            <div className="font-normal"><div className="inline font-bold">Team Size:</div> {teamSize}</div>
                            <div className="font-normal"><div className="inline font-bold">Project Type:</div> {type}</div>
                            <div className="inline font-bold">What I Did:</div>
                            {
                                myCredits !== undefined && myCredits !== null &&
                                myCredits.map(item => (
                                    <div className="ml-6">- {item}</div>
                                ))
                            }
                        </div>
                        <div className="font-normal">
                            <div className="font-bold">Technologies Used:</div>
                            {
                                technologies !== undefined && technologies !== null &&
                                technologies.map(item => (
                                    <div className="ml-6">- {item}</div>
                                ))
                            }
                            <div className="inline font-bold">Thumbnail Credit: </div>
                            <a className="inline underline hover:text-blue-400" 
                                href={thumbnailLink} 
                                target="_blank" rel="noreferrer">{thumbnailArtist}</a>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="text-3xl sm:text-center md:text-left">Showcase</div>
                    {<Carousel onChange={(index) => setImageId(index)} renderItem={customRenderItem} className="m-2" showThumbs={false}>
                        {content.map((item, index) => (
                            <div>
                                <button onClick={() => {
                                    setImageId(index);
                                    setOpen(o => !o);
                                }}>
                                    {
                                        item["COMPARISON"] !== undefined ?
                                        <ReactCompareSlider
                                            itemOne={<ReactCompareSliderImage src={item["COMPARISON"][0]} alt={
                                                tooltips !== undefined && tooltips !== null && 
                                                tooltips[index] !== undefined && tooltips[index] !== null && tooltips[index] !== "NONE" ?
                                                tooltips[index] : ''
                                                } />}
                                            itemTwo={<ReactCompareSliderImage src={item["COMPARISON"][1]} alt={
                                                tooltips !== undefined && tooltips !== null && 
                                                tooltips[index] !== undefined && tooltips[index] !== null && tooltips[index] !== "NONE" ?
                                                tooltips[index] : ''
                                                } />}
                                            /> :
                                        item.includes("png") || item.includes("jpg") || item.includes("jpeg") ?
                                            <img src={item} className="w-full h-full" alt={
                                            tooltips !== undefined && tooltips !== null && 
                                            tooltips[index] !== undefined && tooltips[index] !== null && tooltips[index] !== "NONE" ?
                                            tooltips[index] : ''
                                            } /> :
                                        <PlayerSlide isSelected={index === imageId && !open} key={index} url={item} loop={true} volume={0} isMobile={isMobile} />
                                    }
                                </button>
                                {
                                    tooltips !== undefined && tooltips !== null && 
                                    tooltips[index] !== undefined && tooltips[index] !== null && tooltips[index] !== "NONE" ?
                                    <p className="legend">{tooltips[index]} </p> : null
                                }
                            </div>
                            
                        ))}
                    </Carousel>}

                    <Popup closeOnEscape closeOnDocumentClick open={open} modal onClose={() => closePopup()}
                        contentStyle={{width: "100%", height: "100%", background: "transparent", border: "none"}}>
                        <div className="w-full h-full" onClick={() => closePopup()}>
                            {
                                content[imageId]["COMPARISON"] !== undefined ?
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src={content[imageId]["COMPARISON"][0]} alt={
                                        tooltips !== undefined && tooltips !== null && 
                                        tooltips[imageId] !== undefined && tooltips[imageId] !== null && tooltips[imageId] !== "NONE" ?
                                        tooltips[imageId] : ''
                                        } />}
                                    itemTwo={<ReactCompareSliderImage src={content[imageId]["COMPARISON"][1]} alt={
                                        tooltips !== undefined && tooltips !== null && 
                                        tooltips[imageId] !== undefined && tooltips[imageId] !== null && tooltips[imageId] !== "NONE" ?
                                        tooltips[imageId] : ''
                                        } />}
                                    /> :
                                content[imageId].includes("png") || content[imageId].includes("jpg") || content[imageId].includes("jpeg") ?
                                <img src={content[imageId]} 
                                    className="top-[50%] left-[50%] relative translate-x-[-50%] translate-y-[-50%] max-w-[90vw] max-h-full object-contain" 
                                    alt={
                                        tooltips !== undefined && tooltips !== null && 
                                        tooltips[imageId] !== undefined && tooltips[imageId] !== null && tooltips[imageId] !== "NONE" ?
                                        tooltips[imageId] : ''
                                    } 
                                /> :
                                <PlayerSlide isSelected={true}
                                    style="top-[50%] left-[50%] relative translate-x-[-50%] translate-y-[-50%] max-w-[90vw] max-h-full object-contain" 
                                    url={content[imageId]} loop={true} volume={0} isMobile={isMobile} />
                            }
                        </div>
                    </Popup>

                    <div className="text-base text-left p-2 border-none">
                        <div className="text-2xl font-bold left-0 mb-4">About the Project:</div>
                        <div className="text-base text-left font-normal ml-8">
                            {
                                parse(projectDesc)
                            }
                        </div>
                    </div>
                </div>
                
                {
                    projectExtraDesc !== undefined && projectExtraDesc !== null &&
                    <ContentToggle className="text-base text-left" toggledClasses="bg-gray-900 m-2"
                        toggleButton={(isToggled) =>
                            <div className="button flex flex-row justify-center items-center p-3 gap-2 max-w-fit mb-2">
                                    {
                                        isToggled ?
                                        <MdOutlineArrowForwardIos /> :
                                        <MdOutlineArrowForwardIos className="rotate-90" />
                                    }
                                    Read More!
                                </div>} 
                            altToggleButton={<div>Read More!</div>} 
                            content={
                                <div>
                                    {
                                        parse(projectExtraDesc)
                                    }
                                </div>
                        } 
                    />
                }

                <div className="flex flex-col md:flex-row">
                    {
                        links !== undefined && links !== null &&
                        links.map((item, index) => (
                            <button onClick={()=>{window.open(
                                item,
                                '_blank' // <- This is what makes it open in a new window.
                                );}} 
                            className="button m-2">
                                {buttonText[index]}
                            </button>
                        ))
                    }

                    <NavLink to="/projects" className="button m-2">Back</NavLink>
                </div>
            </div>
        </div>
    );
}


export default Sandbox;