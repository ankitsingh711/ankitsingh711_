import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


const WelcomeInput = ({ onClick }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    function handleOnClick() {
        console.log('clicked')
        if (name === '') {
            return;
        };
    }
    return (
        <div className="welcome_component_main__container">
            <div className="input_field_section">
                <input type="text" placeholder="Please ask your question: What would you like to know about me?" required onChange={(e) => { setName(e?.target?.value) }} />
                <button
                    className="start_btn"
                    onClick={handleOnClick}
                    type="submit"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleOnClick();
                        }
                    }}
                >
                    <SearchIcon fontSize="large" />
                </button>
            </div>
        </div>
    );
};

export default WelcomeInput;