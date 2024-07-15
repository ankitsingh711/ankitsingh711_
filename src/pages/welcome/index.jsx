import WelcomeInput from "../../components/WelcomeInput";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import SmallCards from "../../components/SmallCards";

const Welcome = () => {
    const text = ['WELCOME TO MY PORTFOLIO', 3000, 'FULL STACK DEVELOPER', 3000, 'SOFTWARE ENGINEER', 3000, 'YOUTUBER', 3000, 'CONTENT CREATOR', 3000];
    const [name, setVisitorName ] = useState('');
    return (
        <div className="welcome_main__container">
            <div className="welcome_text_section">
                <h1>
                    <TypeAnimation sequence={text} repeat={Infinity} cursor={true} speed={10} />
                </h1>
            </div>
            <div>
                <WelcomeInput onClick={() => setModalShow(true)} setVisitorName={setVisitorName}/>
            </div>
            <div className="small-cards_section">
                <SmallCards text="Home" />
                <SmallCards text="Projects" />
                <SmallCards text="Skills" />
                <SmallCards text="Experience" />
                <SmallCards text="Contact" />
                <SmallCards text="Resume" />
            </div>
        </div>
    );
};

export default Welcome;