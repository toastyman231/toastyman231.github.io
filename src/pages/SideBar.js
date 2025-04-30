import { BsBraces, BsFillPersonFill, BsChatTextFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { matchPath, NavLink, useLocation } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBar = () => {
  const [isLinksActive, setLinksActive] = useState(false);
  const [isCollapsed, setCollapsed] = useState(true);
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (matchPath(pathname, "/links") != null)
      setLinksActive(true);
    else setLinksActive(false);
  }, []);

  return (
      <div>
        <div onClick={() => {setCollapsed(false)}} 
            className={isCollapsed ? "sidebar-icon fixed m-4 ml-2 bg-gray-900 lg:hidden" : "hidden"}>
          <GiHamburgerMenu size="28" className="" color="white" />
        </div>

        <div className={isLinksActive || isCollapsed ? 
            "fixed lg:static top-0 left-0 p-2 h-screen w-16 ml-[-4rem] lg:m-0 flex flex-col bg-gray-900 text-white shadow-lg transition-all duration-150 ease-linear" 
          : "fixed lg:static top-0 left-0 p-2 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg transition-all duration-150 ease-linear"}>
          <div onClick={() => {setCollapsed(true)}} 
              className="sidebar-icon lg:hidden">
            <GiHamburgerMenu size="28" className="" color="white" />
          </div>
          <SideBarIcon icon={<FaHome size="28" className="" />} text="Home" newPage="" />
          <Divider />
          <SideBarIcon icon={<BsBraces size="28" />} text="Projects" newPage="projects" />
          <SideBarIcon icon={<BsFillPersonFill size="28" />} text="About" newPage="about" />
          <SideBarIcon icon={<BsChatTextFill size="24" />} text="Contact" newPage="contact" />
        </div>
      </div>
  );
};

function isPathActive(pathname, path) {
  return matchPath(pathname, path) != null;
}

function SideBarIcon({icon, newPage, text = 'tooltip'}) {
    return(
      <NavLink to={"/"+newPage} className={({isActive}) => ReturnClassName(isActive)} >
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
      </NavLink>
    );
};

function ReturnClassName(active){
  return active ? 'sidebar-icon-active group' : "sidebar-icon group";
}

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;