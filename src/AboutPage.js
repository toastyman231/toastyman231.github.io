import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiTeacher } from 'react-icons/gi';
import { SiCsharp, SiUnity, SiUnrealengine} from 'react-icons/si';

const isMobile = window.innerWidth <= 768;

const AboutPage = () => {
    return (
        <div className={isMobile ? "content-container overflow-y-scroll h-screen w-[95vw]" : "content-container overflow-y-scroll h-screen"}>
            <div className={isMobile ? "text-white text-center flex flex-col pt-5 px-2" : "text-white text-center flex flex-col pt-5 px-20"}>
                <div className="text-bold text-5xl text-center">About Me</div>
                <div className="text-thin text-xl text-center pt-5">
                    Game developer with Unity, C#, Unreal Engine 5, and C++.
                    Student at Indiana University Bloomington, studying Computer Science with a specialization in game development.
                    Courses taken include: Java, Game Design, Discrete Structures, Game Programming, and more.
                </div>
                <div className="text-bold text-3xl text-center pt-5">
                    Work History
                </div>
                <div className="pt-5">
                    <VerticalTimeline>
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="April 2024 - Present"
                                                dateClassName="text-left"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<SiUnrealengine />}>
                            <h3 className="vertical-timeline-element-title">Lead Programmer on Decomposition</h3>
                            <h3 className="vertical-timeline-element-title">at Cozy Crow Studios</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bloomington, IN</h4>
                            <p>
                                Developed a 3D analog horror game in Unreal Engine 5.
                                
                            </p> <br className='block mt-0' />
                            <p>
                                Managed a team of programmers to rapidly prototype and iterate on gameplay features and systems to create a robust, maintainable codebase.
                            </p> <br className='block mt-0' />
                            <p>
                                Wrote custom engine tools to speed up development.
                                Helped other team members complete tasks by providing insight and experience in engine.
                            </p>
                        </VerticalTimelineElement> 
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="August 2024 - December 2024"
                                                dateClassName="text-left"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<GiTeacher />}>
                            <h3 className="vertical-timeline-element-title">Undergraduate Instructor</h3>
                            <h3 className="vertical-timeline-element-title">at Indiana University Bloomington</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bloomington, IN</h4>
                            <p>
                            Assisted teaching IU's Computer Graphics course, including running lab sections, preparing rubrics, grading assignments, holding office hours, and managing class resources.
                            </p>
                        </VerticalTimelineElement> 
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="May 2023 - June 2024"
                                                dateClassName="text-left"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<SiUnrealengine />}>
                            <h3 className="vertical-timeline-element-title">Programmer</h3>
                            <h3 className="vertical-timeline-element-title">at The Raft Genre</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bloomington, IN (Remote)</h4>
                            <p>
                            Helped design and develop a tactics game prototype using Unreal Engine 5. Worked alongside artists and other designers to deliver a unique and exciting gameplay experience.
                            </p>
                        </VerticalTimelineElement>  
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                                                contentStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                contentArrowStyle={{ borderRight: '7px solid  rgb(22, 163, 74)' }}
                                                date="June 2022 - July 2022"
                                                dateClassName="text-left"
                                                iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
                                                icon={<GiTeacher />}>
                            <h3 className="vertical-timeline-element-title">Network Admin/Technology Counselor</h3>
                            <h3 className="vertical-timeline-element-title">at Emagination Tech Camps</h3>
                            <h4 className="vertical-timeline-element-subtitle">Lake Forest, IL</h4>
                            <p>
                                Ran the camp network, including connecting devices and backing up network storage. Also taught game development and coding to kids and teens while maintaining a fun camp environment.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                    <div className="text-bold text-5xl text-center pt-5">
                        Skills

                        <div className={isMobile ? 'flex flex-col divide-y overflow-y-scroll w-full scrollbar-hide content-center items-center justify-center pt-5' : 
                            'flex flex-row divide-x overflow-x-scroll w-full scrollbar-hide content-center items-center justify-center pt-5'}>
                            <div className={isMobile ? 'flex flex-col items-center justify-center pb-2'
                                            : 'flex flex-col items-center justify-center px-5 pb-2'}>
                                <SiCsharp size="100" className='' />
                                <div className='text-thin text-base text-center pt-3'>
                                    Experienced with C# and the .Net ecosystem.
                                </div>
                                <div className='text-thin text-base text-center pt-2'>
                                    Taught C# and programming fundamentals to kids aged 8 - 17.
                                </div>
                            </div>
                            <div className={isMobile ? 'flex flex-col items-center justify-center pb-2 pt-3'
                                            : 'flex flex-col items-center justify-center px-5'}>
                                <SiUnity size="100" className='' />
                                <div className='text-thin text-base text-center pt-3'>
                                    6+ years of experience developing 2D and 3D games with Unity.
                                </div>
                                <div className='text-thin text-base text-center pt-2'>
                                    Familiar with Git version control in Unity using Github.
                                </div>
                            </div>
                            <div className={isMobile ? 'flex flex-col items-center justify-center pt-3'
                                            : 'flex flex-col items-center justify-center px-5'}>
                                <SiUnrealengine size="100" className='' />
                                <div className='text-thin text-base text-center pt-3'>
                                    Experience working with Unreal Engine 5, Blueprints and C++.
                                </div>
                                <div className='text-thin text-base text-center pt-2'>
                                    Taught Unreal to kids at Emagination Tech Camp.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-5 font-bold'>
                    Additional Skills: C++, Engine Development, Graphics Programming, Java, Perforce, Networking and Database Management basics
                </div>
            </div>
            &nbsp;
        </div>
    );
};

export default AboutPage;