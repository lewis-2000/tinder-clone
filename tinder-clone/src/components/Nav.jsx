import whiteLogo from '../assets/tinder_logo_white.png'
import colorLogo from '../assets/color-logo-tinder.png'


const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    }

    const authtoken = false;

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo: whiteLogo} />
            </div>
            {!authtoken && !minimal && < button className="nav-button" onClick={handleClick} disabled={showModal} setIsSignUp={false }>Log In</button>}
        </nav>
    )
}

export default Nav;