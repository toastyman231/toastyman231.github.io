import jake from "./jake_photo.jpg";

const isMobile = window.innerWidth <= 768;
const imageList = [jake];

const ProjectsPage = () => {
    return (
        <div className="content-container overflow-y-scroll h-screen text-white">
            <div className="text-bold text-5xl text-center pt-5">
                My Projects
            </div>

            <div className="flex flex-col items-center pt-5">
                {/*TODO: Replace this with an actual image and description of my projects*/}
                <Project projectName="Proj 1" projectDesc="My first project" imageID={0} link="https://www.github.com/toastyman231/SuperheroRPG" />
            </div>
        </div>
    );
};

const Project = ({projectName, projectDesc, imageID, link}) => {
    return (
        <div className={
            isMobile ? "bg-gray-900 text-white text-center text-lg font-bold w-screen rounded-md" 
            : "bg-gray-900 text-white text-center text-lg font-bold w-[1000px] object-center rounded-md"
        }>
            {projectName}

            <div className="text-base">
                {projectDesc}
            </div>

            <div className="flex flex-col items-center px-2 py-2">
                <img src={imageList[imageID]} alt="Project screenshot" />
            </div>

            <div className="pb-3">
                <button onClick={()=>{window.open(
                                        link,
                                        '_blank' // <- This is what makes it open in a new window.
                                    );}} 
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    View on GitHub</button>
            </div> 
        </div>
    );
}

export default ProjectsPage;