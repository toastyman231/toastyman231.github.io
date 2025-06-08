import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from 'react';
import { firebaseDB } from "../App";
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { NavLink } from 'react-router';

const ProjectsPage = () => {
    const [projects, setProjects] = useState(new Map());

    const refreshProjects = async () => {
        const querySnapshot = await getDocs(collection(firebaseDB, "projects"));
        let tempProjects = new Map();
        querySnapshot.forEach((doc) => {tempProjects.set(doc.id, doc.data())})
        setProjects(tempProjects)
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
                    {Array.from(projects.entries()).map(([index, project]) => 
                    <li key={index} className="pb-4 cursor-pointer">
                        <NavLink to={"/projects/"+index} className="bg-gray-900 pt-4 pb-4 flex flex-col md:flex-row lg:flex-row items-center 
                                rounded-md transition hover:transition-all hover:duration-100 hover:outline hover:outline-white">
                            <div className="px-4">
                                <img src={project.thumb} alt={project["project-name"] + " Thumbnail"} width={380} height={180} className="rounded-md" />
                            </div>
                            <div className="flex flex-grow flex-col items-center px-10">
                                <p className="text-white text-center text-3xl font-bold w-full rounded-md pt-2">{project["project-name"]}</p>
                                <p className="text-white text-center text-sm w-full rounded-md pt-2">{project["short-description"]}</p>
                                <p className="text-white text-center text-sm w-full rounded-md pt-2">Type: {project.type ?? "Demo"}</p>
                                <p className="text-white text-center text-sm w-full rounded-md pt-2">Role: {project.role ?? "Programmer"}</p>
                            </div>
                        </NavLink>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

// Wrapper for putting videos in Carousels, to prevent them from playing when not selected on the carousel
export const PlayerSlide = ({url, isSelected, loop, volume, isMobile}) => (
    <ReactPlayer width={url.includes("youtube") ? isMobile ? "100%" : 960 : "100%"} height={url.includes("youtube") ? isMobile ? "100%" : 540 : "100%"} volume={volume} loop={loop} url={url} playing={isSelected} />
);
// Black magic I got off the carousel docs
export const customRenderItem = (item, props) => <item.type {...item.props} {...props} />

export const ExternalProjectCard = ({projectId, sizeX = 190, sizeY = 90}) => {
    const [project, setProject] = useState([]);

    const refreshProjects = async () => {
        const docRef = doc(firebaseDB, "projects", projectId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
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
        <NavLink className="bg-gray-900 my-2 py-4 flex flex-col md:flex-col lg:flex-row items-center 
                                rounded-md transition hover:transition-all hover:duration-100 hover:outline hover:outline-white
                                w-full lg:max-w-[500px]"
            to={"/projects/"+projectId}>
            <div className="px-4">
                <img src={project.thumb} width={sizeX} height={sizeY} alt={project["project-name"] + " Thumbnail"} className="rounded-md" />
            </div>
            <div className="flex flex-grow flex-col items-center px-10">
                <p className="text-white text-center text-3xl font-bold w-full rounded-md">{project["project-name"]}</p>
                <p className="text-white text-center text-sm w-full rounded-md pt-2">{project["short-description"]}</p>
                <p className="text-white text-center text-sm w-full rounded-md">Type: {project.type ?? "Demo"}</p>
                <p className="text-white text-center text-sm w-full rounded-md">Role: {project.role ?? "Programmer"}</p>
            </div>
        </NavLink>
    );
}

export default ProjectsPage;