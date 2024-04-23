import { useNavigate } from "react-router-dom";


const WelcomeInput = () => {
    const navigate = useNavigate();

    function handleOnClick(){
        navigate('/home');
    }
    return (
        <div className="welcome_component_main__container">
            <div className="input_field_section">
                <input type="text" placeholder="What's Your Good Name" />
                <button className="start_btn" onClick={handleOnClick}>Visit Portfolio &rarr;</button>
            </div>
        </div>
    );
};

export default WelcomeInput;