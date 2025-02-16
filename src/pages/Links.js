import jake from "../Images/jake_headshot2.jpg";
import jake2 from "../Images/jake_photo.jpg";
import linkedin from "../Images/linkedin.webp";
import github from "../Images/github.png";
import itch from "../Images/itch.png";
import LinkButton from "../components/LinkButton";

const Links = () => {
    return (
        <div className={"content-container h-fill w-screen m-0 justify-center"}>
            <div className="flex h-full w-full flex-1 flex-col justify-between px-4 pb-8 pt-16 sm:pb-16">
                <div className="mx-auto h-full w-full">
                    <div className="flex flex-col items-center">
                        <img src={jake} alt="Jake Morgenstern headshot" width={100} className="rounded-full mb-4" />
                        <h1 className="mx-3 flex max-w-full items-center text-white text-ellipsis text-balance text-center text-lg font-[700] leading-[1.5]">
                            Jake Morgenstern</h1>
                        <h2 className="px-6 mt-[2px] text-center text-white text-balance">Gameplay and Engine Programmer</h2>
                    </div>
                    <div className="flex flex-col gap-4 mt-8 items-center">
                        <LinkButton pageLink={"https://toastyman231.github.io"} pageIcon={jake2} linkText="Portfolio" />
                        <LinkButton pageLink={"https://www.linkedin.com/in/jakemorgenstern"} pageIcon={linkedin} linkText="LinkedIn" />
                        <LinkButton pageLink={"https://www.github.com/toastyman231"} pageIcon={github} linkText="GitHub" />
                        <LinkButton pageLink={"https://toastyman231.itch.io/"} pageIcon={itch} linkText="Itch" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Links;