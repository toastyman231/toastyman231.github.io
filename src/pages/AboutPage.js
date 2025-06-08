import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiTeacher } from 'react-icons/gi';
import { SiCplusplus, SiUnity, SiUnrealengine} from 'react-icons/si';
import CSharpIcon from '../components/CsharpIcon';

const AboutPage = () => {
    return (
        <div className="content-container overflow-y-scroll h-screen sm:w-[95vw] md:w-full lg:w-full">
            <div className="text-white text-center flex flex-col pt-5 px-2 md:px-20 lg:px-20 items-center">
                <div className="text-bold text-5xl text-center">About Me</div>
                <div className="text-thin text-xl text-left pt-5 max-w-xl">
                    - Game developer with <bold className="font-bold">Unity</bold>, <bold className="font-bold">Unreal Engine 5</bold>, and <bold className="font-bold">C++</bold>.<br />
                    - Computer Science B.S. with a specialization in Game Development.<br />
                    - Courses taken include: Game Programming, Computer Graphics, Game Design, Java, Computing Theory, and more
                </div>
                <div className="text-bold text-3xl text-center pt-5">
                    Work History
                </div>
                <div className="pt-5 max-w-[80vw] md:max-w-[50vw] lg:max-w-full">
                    <VerticalTimeline>
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="April 2024 - May 2025"
                                                dateClassName="text-left mx-5"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<SiUnrealengine />}>
                            <h3 className="vertical-timeline-element-title">Lead Programmer on Desecration</h3>
                            <h3 className="vertical-timeline-element-title">at Cozy Crow Studios</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bloomington, IN</h4>
                            <p className="text-justify">
                                Developed a 3D analog horror game in Unreal Engine 5.
                                
                            </p> <br className='block mt-0' />
                            <p className="text-justify">
                                Managed a team of programmers to rapidly prototype and iterate on gameplay features and systems to create a robust, maintainable codebase.
                            </p> <br className='block mt-0' />
                            <p className="text-justify">
                                Wrote custom engine tools to speed up development.
                                Helped other team members complete tasks by providing insight and experience in engine.
                            </p>
                        </VerticalTimelineElement> 
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="August 2024 - December 2024"
                                                dateClassName="text-left mx-5"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<GiTeacher />}>
                            <h3 className="vertical-timeline-element-title">Undergraduate Instructor</h3>
                            <h3 className="vertical-timeline-element-title">at Indiana University Bloomington</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bloomington, IN</h4>
                            <p className="text-justify">
                            Assisted teaching IU's Computer Graphics course, including running lab sections, preparing rubrics, grading assignments, holding office hours, and managing class resources.
                            </p>
                        </VerticalTimelineElement> 
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="May 2023 - June 2024"
                                                dateClassName="text-left mx-5"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<SiUnrealengine />}>
                            <h3 className="vertical-timeline-element-title">Programmer</h3>
                            <h3 className="vertical-timeline-element-title">at The Raft Genre</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bloomington, IN (Remote)</h4>
                            <p className="text-justify">
                            Helped design and develop a tactics game prototype using Unreal Engine 5. Worked alongside artists and other designers to deliver a unique and exciting gameplay experience.
                            </p>
                        </VerticalTimelineElement>  
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="June 2022 - July 2022"
                                                dateClassName="text-left mx-5"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<GiTeacher />}>
                            <h3 className="vertical-timeline-element-title">Network Admin/Technology Counselor</h3>
                            <h3 className="vertical-timeline-element-title">at Emagination Tech Camps</h3>
                            <h4 className="vertical-timeline-element-subtitle">Lake Forest, IL</h4>
                            <p className="text-justify">
                                Ran the camp network, including connecting devices and backing up network storage. Also taught game development and coding to kids and teens while maintaining a fun camp environment.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                    <div className="text-bold text-5xl text-center pt-5 flex flex-col items-center justify-center">
                        Skills

                        <table className="m-5">
                            <thead className="md:flex flex-row items-center justify-center w-[100vw] md:w-[90vw]">
                                <div className="flex flex-row items-center justify-center w-full md:border-r-2 p-2">
                                    <CSharpIcon size="100" className="px-1" />
                                    <SiCplusplus size="100" className="px-1" />
                                </div>
                                <div className="md:hidden flex flex-row md:flex-col items-center justify-center">
                                    <SiUnity size="100" className="md:w-full md:border-r-2 px-1 md:p-2" />
                                    <SiUnrealengine size="100" className="md:w-full px-1 md:p-2" />
                                </div>
                                <SiUnity size="116" className="hidden md:table w-full border-r-2 px-1 md:p-2" />
                                <SiUnrealengine size="116" className="hidden md:table w-full px-1 md:p-2" />
                            </thead>
                            <tbody>
                                <tr className="flex flex-col md:flex-row my-2 md:my-0 text-thin text-base text-justify md:text-center">
                                    <div className='p-2 max-w-[80vw] md:w-full md:border-r-2'>
                                        Taught C# and programming fundamentals to kids aged 8 - 17.
                                    </div>
                                    <div className='p-2 max-w-[80vw] md:w-full md:border-r-2'>
                                        6+ years of experience developing 2D and 3D games with Unity.
                                    </div>
                                    <div className='p-2 max-w-[80vw] md:w-full'>
                                        Experience working with Unreal Engine 5, Blueprints and C++.
                                    </div>
                                </tr>
                                <tr className="flex flex-col md:flex-row my-2 md:my-0 text-thin text-base text-justify md:text-center">
                                    <div className='p-2 max-w-[80vw] md:w-full md:border-r-2'>
                                        Experience developing games in C++ using a custom engine.
                                    </div>
                                    <div className='p-2 max-w-[80vw] md:w-full md:border-r-2'>
                                        Familiar with Git version control in Unity using Github.
                                    </div>
                                    <div className='p-2 max-w-[80vw] md:w-full'>
                                        Taught Unreal to kids at Emagination Tech Camp.
                                    </div>
                                </tr>
                            </tbody>
                        </table>
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