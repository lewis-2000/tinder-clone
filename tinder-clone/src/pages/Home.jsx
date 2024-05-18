import Nav from '../components/Nav';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';


const Home = () => {
    const authToken = false;
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const handleClick = () => {
        console.log('Clicked');
        setShowModal(true);
       // setIsSignUp(true);
    }

    return (
        <div className="overlay">
            <Nav minimal={false} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
            <div className="home">
                <h1 className="primary-title">Swipe Right &reg;</h1>
                <button className={"primary-button"} onClick={ handleClick }>
                    {authToken?'Sign Out': 'Create Account'}
                </button>

                {showModal && (<AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />)}
            </div>
        </div>
    )
}

export default Home;