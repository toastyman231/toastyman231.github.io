import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiTeacher } from 'react-icons/gi';
import { SiCplusplus, SiUnity, SiUnrealengine, SiMlb } from 'react-icons/si';
import CSharpIcon from '../components/CsharpIcon';

const WorkCard = ({title, company, location, date, icon, description}) => {
    console.log(description);

    return (
        <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                date={date}
                                dateClassName="text-left mx-5"
                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                icon={icon}>
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h3 className="vertical-timeline-element-title">at <h3 className='italic inline'>{company}</h3></h3>
            <h4 className="vertical-timeline-element-subtitle">{location}</h4>
            <p></p>
            <ul className="text-left list-disc">
                {
                    description.map((desc, index) =>
                        <li key={index}>{desc}</li>
                    )
                }
            </ul>
        </VerticalTimelineElement> 
    );
};

const AboutPage = () => {
    return (
        <div className="content-container overflow-y-scroll h-screen w-full">
            <div className="text-white text-center flex flex-col pt-5 px-2 items-center">
                <div className="text-bold text-5xl text-center">About Me</div>
                <div className="text-thin text-xl text-left pt-5 max-w-xl">
                    - Game developer with <bold className="font-bold">Unity</bold>, <bold className="font-bold">Unreal Engine 5</bold>, and <bold className="font-bold">C++</bold>.<br />
                    - Computer Science B.S. with a specialization in Game Development.<br />
                    - Courses taken include: Game Programming, Computer Graphics, Game Design, Java, Computing Theory, and more
                </div>
                <button onClick={()=>{window.open(
                                        'https://docs.google.com/document/d/1nLvawLqmwgFQ5h48K_fzNhydQ19HBeSew-4JYBpXET0/edit?usp=sharing',
                                        '_blank' // <- This is what makes it open in a new window.
                                    );}} 
                        className="button w-[200px] m-2">
                    View my Resume!</button>
                <div className="text-bold text-3xl text-center pt-2">
                    Work History
                </div>
                <div className="pt-5 max-w-full">
                    <VerticalTimeline>
                        <WorkCard title="Graphics UI Programmer (Contract)"
                                    company="Sony San Diego Studio"
                                    date="Nov 2025 - Present"
                                    icon={<SiMlb />}
                                    location="San Diego, CA"
                                    description={[
                                        "Optimized and extended user interface rendering for MLB: The Show."
                                    ]} />
                        <WorkCard title="Lead Programmer on Desecration"
                                    company="Cozy Crow Studios"
                                    date="April 2024 - May 2025"
                                    icon={<SiUnrealengine />}
                                    location="Bloomington, IN"
                                    description={[
                                        "Developed a 3D analog horror game in Unreal Engine 5.",
                                        "Managed a team of programmers to rapidly prototype and iterate on gameplay features and systems to create a robust, maintainable codebase.",
                                        "Wrote custom engine tools to speed up development.",
                                        "Helped other team members complete tasks by providing insight and experience in engine."
                                    ]}/>
                        <WorkCard title="Undergraduate Instructor"
                                    company="Indiana University Bloomington"
                                    date="August 2024 - December 2024"
                                    icon={<GiTeacher />}
                                    location="Bloomington, IN"
                                    description={[
                                        "Assisted teaching IU's Computer Graphics course, including running lab sections, preparing rubrics, grading assignments, holding office hours, and managing class resources."
                                    ]}/>
                        <WorkCard title="Game Programmer"
                                    company="The Raft Genre"
                                    date="May 2023 - June 2024"
                                    icon={<SiUnrealengine />}
                                    location="Bloomington, IN (Remote)"
                                    description={[
                                        "Helped design and develop a tactics game prototype using Unreal Engine 5.",
                                        "Worked alongside artists and other designers to deliver a unique and exciting gameplay experience."
                                    ]}/>
                        <WorkCard title="Network Admin/Technology Counselor"
                                    company="Emagination Tech Camps"
                                    date="June 2022 - July 2022"
                                    icon={<GiTeacher />}
                                    location="Lake Forest, IL"
                                    description={[
                                        "Ran the camp network, including connecting devices and backing up network storage.",
                                        "Taught game development and coding to kids and teens while maintaining a fun camp environment."
                                    ]}/>
                    </VerticalTimeline>

                    <div className="text-bold text-5xl text-center pt-5 flex flex-col items-center justify-center md:text-center">
                        Skills

                        <div className="m-5 block md:grid md:grid-rows-1 md:grid-cols-3 text-base text-left items-center md:items-start">
                            <div className="hidden md:flex flex-col md:flex-row items-center justify-center w-full md:border-r-2 p-2 ">
                                <CSharpIcon size="100" className="px-1" />
                                <SiCplusplus size="100" className="px-1" />
                            </div>
                            <SiUnity size="116" className="hidden md:block w-full md:border-r-2 px-1 md:p-2" />
                            <SiUnrealengine size="116" className="hidden md:block w-full px-1 md:p-2" />
                            <div className='flex md:hidden flex-row items-center'>
                                <CSharpIcon size="100" className="w-full px-1 md:p-2 md:hidden" />
                                <SiCplusplus size="100" className="w-full px-1 md:p-2 md:hidden" />
                                <SiUnity size="116" className="w-full md:border-r-2 px-1 md:p-2" />
                                <SiUnrealengine size="116" className="w-full px-1 md:p-2" />
                            </div>
                            <div className='grid grid-rows-2 grid-cols-3 row-span-2 col-span-3'>
                                <div className='p-2 px-4 w-full md:border-r-2 col-span-3 md:col-span-1 h-full'>
                                    Taught C# and programming fundamentals to kids aged 8 - 17.
                                </div>
                                <div className='p-2 px-4 w-full md:border-r-2 col-span-3 md:col-span-1 h-full'>
                                    6+ years of experience developing 2D and 3D games with Unity.
                                </div>
                                <div className='p-2 px-4 w-full col-span-3 md:col-span-1 h-full'>
                                    Experience working with Unreal Engine 5, Blueprints and C++.
                                </div>
                                <div className='p-2 px-4 w-full md:border-r-2 col-span-3 md:col-span-1'>
                                    Experience developing games in C++ using a custom engine.
                                </div>
                                <div className='p-2 px-4 w-full md:border-r-2 col-span-3 md:col-span-1'>
                                    Familiar with Git version control in Unity using Github.
                                </div>
                                <div className='p-2 px-4 w-full col-span-3 md:col-span-1'>
                                    Taught Unreal to kids at Emagination Tech Camp.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:pt-5 font-bold text-lg w-[75vw] text-left md:text-center'>
                    <p className="text-center p-0 m-0">Additional Skills:</p>
                    <p className="text-left md:text-center font-normal text-base translate-x-[15%] md:translate-x-0">
                        Engine Development<br className="inline md:hidden"></br><p className="hidden md:inline">, </p>
                        Graphics Programming<br className="inline md:hidden"></br><p className="hidden md:inline">, </p>
                        Java<br className="inline md:hidden"></br><p className="hidden md:inline">, </p>
                        Perforce<br className="inline md:hidden"></br><p className="hidden md:inline">, </p>
                        Networking<br className="inline md:hidden"></br><p className="hidden md:inline">, </p>
                        Database Management basics
                    </p>
                </div>
            </div>
            &nbsp;
        </div>
    );
};

export default AboutPage;