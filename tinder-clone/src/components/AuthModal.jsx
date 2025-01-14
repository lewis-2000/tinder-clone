﻿import {useState } from 'react'


const AuthModal = ({ setShowModal, isSignUp }) => {
    const handleClick = () => {
        setShowModal(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError("Passowrds need to match!");
            }

            console.log('make a post request to our database');
        } catch (error) {
            console.log(error);
        }
    }

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);



    return (
        <div className="auth-modal">
            <div onClick={handleClick} className="close-icon">ⓧ</div>
            <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
            <p>By clicking login you agree to our terms. Learn how we process your data in our Privacy Policy and our Cookie Policy.</p>

            <form onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" placeholder="Email" required={true} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="password" name="password" placeholder="Password" required={true} onChange={(e) => setPassword(e.target.value)} />
                {isSignUp && < input type="password" id="password-check" name="password-check" placeholder=" Confirm Your Password" required={true} onChange={(e) => setConfirmPassword(e.target.value)} />}
                <input type="submit" className="secondary-button" />

                <p>{error }</p>


            </form>

            <hr />
            <h2>GET THE APP</h2>

        </div>
    )
}

export default AuthModal;