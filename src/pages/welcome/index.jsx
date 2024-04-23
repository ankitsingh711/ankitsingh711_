import WelcomeInput from "../../components/WelcomeInput";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
    const text = ['WELCOME TO MY PORTFOLIO', 3000, 'FULL STACK DEVELOPER', 3000, 'YOUTUBER', 3000, 'CONTENT CREATOR', 3000]
    return (
        <div className="welcome_main__container">
            <div className="welcome_text_section">
                <h1>
                    <TypeAnimation sequence={text} repeat={Infinity} cursor={true} speed={10}/>
                </h1>
            </div>
            <WelcomeInput />
        </div>
    );
};

export default Welcome;