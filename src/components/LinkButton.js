
const LinkButton = ({pageLink, pageIcon, linkText}) => {
    return(
        <div className="h-full w-[91%] md:w-[580px] lg:w-[580px]">
            <div className="relative h-full">
                <div className="h-full overflow-hidden rounded-[30px]
                    bg-transparent border-2 transition-all
                    ease-in-out duration-[250ms] text-white
                    hover:bg-white hover:text-black relative">
                        <a href={pageLink} target='_blank' rel="noreferrer" className='min-h-[64px] pl-[66px] pr-[66px] border-[medium] border-none border-current
                                        text-center flex items-center justify-center h-auto relative pt-[16px] pb-[20px] w-full'>
                            <div className='h-full w-full'>
                                <div className='overflow-hidden absolute top-[50%] translate-y-[-50%] justify-center items-center rounded-[50%] flex left-[8px] w-[46px] h-[46px]'>
                                    <img className='rounded-[50%] w-full block h-full object-cover max-w-full' alt="" src={pageIcon}/>
                                </div>
                                <p className='relative text-[16px] w-full font-[500] leading-[1.5]'>{linkText}</p>
                            </div>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default LinkButton;