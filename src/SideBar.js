
import { BsBraces, BsFillPersonFill, BsChatTextFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import React, { useState } from 'react';

let page;
let prevButton = 'Home';

const SideBar = ({pageSetter}) => {
    page = pageSetter;
    
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 
                        flex flex-col 
                        bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaHome size="28" />} text="Home" newPage="Home" />
            <Divider />
            <SideBarIcon icon={<BsBraces size="28" />} text="Projects" newPage="Projects" />
            <SideBarIcon icon={<BsFillPersonFill size="28" />} text="About" newPage="About" />
            <SideBarIcon icon={<BsChatTextFill size="24" />} text="Contact" newPage="Contact" />
        </div>
    );
};

function SideBarIcon({icon, newPage, text = 'tooltip'}) {
    const [isActive, setIsActive] = useState(false);

    return(
      <div onClick={() => {UpdateAll(page, newPage, setIsActive, CheckState(text))}} className={ReturnClassName(CheckState(text))}>
        {icon} 

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
      </div>
    );
};

function CheckState(text){
  return (text === prevButton) ? true : false;
}

function ReturnClassName(active){
  return active ? 'sidebar-icon-active group' : "sidebar-icon group";
}

const Divider = () => <hr className="sidebar-hr" />;

function UpdateAll(page, newContent, state, newState) {
  prevButton = newContent
  page(newContent)
  state(newState)
  console.log(prevButton)
}

export default SideBar;