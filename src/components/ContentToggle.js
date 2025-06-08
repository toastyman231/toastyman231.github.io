import { useEffect, useState } from "react";

const ContentToggle = ({toggleButton, content, defaultState = false, className="", toggledClasses=""}) => {
    const [isToggled, setIsToggled] = useState(defaultState);
    const [contentClass, setContentClass] = useState("flex flex-col items-center outline ");

    useEffect(() => {
        const classes = isToggled ? "outline outline-white rounded-md p-2 " + className + " " + toggledClasses : className;
        setContentClass("flex flex-col items-center transition-[0.2s] " + classes);
    }, [isToggled, className, toggledClasses]);

    return(
        <div className={contentClass}>
            <button onClick={() =>setIsToggled(!isToggled)}>
                {
                    toggleButton(isToggled)
                }
            </button>
            {
                isToggled ?
                content :
                null
            }
        </div>
    );
}

export default ContentToggle;