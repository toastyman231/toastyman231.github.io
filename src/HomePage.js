import jake from "./jake_photo.jpg";

function HomePage() {
    const isMobile = window.innerWidth <= 768;

    return (
        isMobile ? <Mobile /> : <Desktop />
    );
};

const Divider = () => <hr className="sidebar-hr pt-5" />;

const Desktop = () => {
    return (
        <div className="content-container overflow-y-scroll">
            <div className="text-white text-center font-bold text-7xl pt-4">
                Jake Morgenstern
                <div className="text-white font-thin text-center text-5xl pt-5">
                    Game Developer and Student at Indiana University
                    <div className="flex overflow-auto items-center pt-10">
                        <div className="flex object-left pl-[200px] pr-20 pt-5">
                            <img src={jake} alt="Jake Morgenstern headshot" width={1728} height={2304} />
                        </div>

                        <div className="text-lg font-bold text-center pr-[200px] pt-5">
                            Hi, my name is Jake Morgenstern, and I'm a game development and computer science student at Indiana University
                            Bloomington with experience in Unreal Engine 5 and Unity. Currently I'm working on Decomposition, an analog horror game.
                            Use the bar on the left to explore my projects, learn more about me, or get in contact. If you want to take a look
                            at what I've done, click the button below to view my Github.

                            <Divider />

                            <div className="flex flex-col items-center">
                                <button onClick={()=>{window.open(
                                                        'https://www.github.com/toastyman231',
                                                        '_blank' // <- This is what makes it open in a new window.
                                                    );}} 
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded">
                                            View my GitHub!</button>
                                <button onClick={()=>{window.open(
                                            'https://toastyman231.itch.io/',
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                                        className="button">
                                            View my Itch.io!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Mobile = () => {
    return(
        <div className="content-container h-screen overflow-y-scroll">
            <div className="text-white text-center font-bold text-5xl pt-4">
                Jake Morgenstern
                <div className="text-white font-thin text-center text-xl pt-5">
                    Game Developer and Student at Indiana University

                    <div className="flex flex-col items-center">
                        <div className="object-center pt-5">
                            <img src={jake} alt="Jake Morgenstern headshot" width={window.innerWidth} height={window.innerHeight/2} />
                        </div>

                        <div className="text-lg font-bold text-center pl-5 pr-5 pt-5">
                            Hi, my name is Jake Morgenstern, and I'm a game development and computer science student at Indiana University
                            Bloomington with experience in Unreal Engine 5 and Unity. Currently I'm working on Decomposition, an analog horror game.
                            Use the bar on the left to explore my projects, learn more about me, or get in contact. If you want to take a look
                            at what I've done, click the button below to view my Github.

                            <Divider />

                            <div className="flex flex-col items-center">
                                <button onClick={()=>{window.open(
                                                        'https://www.github.com/toastyman231',
                                                        '_blank' // <- This is what makes it open in a new window.
                                                    );}} 
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded">
                                            View my GitHub!</button>
                                <button onClick={()=>{window.open(
                                            'https://toastyman231.itch.io/',
                                            '_blank' // <- This is what makes it open in a new window.
                                        );}} 
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                            View my Itch.io!</button>
                            </div>

                            <Divider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;