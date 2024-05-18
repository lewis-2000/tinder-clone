import { useState } from 'react';
import Nav from '../components/Nav';


const Onboarding = () => {

    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        last_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: 'man',
        gender_interest: 'woman',
        email: '',
        url: '',
        about: '',
        matches: []

});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
    }

    const handleChange = (e) => {
        console.log("e", e);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;

        console.log("name" + name, "value" + value);
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(formData);

    return (
        <div>
            <Nav minimal={true}
                setShowModal={() => { }}
                showModal={false} />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Bithday</label>
                        <div className="multiple-input-container">
                            <input type="number"
                                name="dob_day"
                                id="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            <input type="number"
                                name="dob_month"
                                id="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />

                            <input type="number"
                                name="dob_year"
                                id="dob_year"
                                placeholder="YY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input type="radio"
                                name="gender_identity"
                                id="man-gender-identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'man'}
                            />
                            <label htmlFor="man-gender-identity">Man</label>


                            <input type="radio"
                                name="gender_identity"
                                id="wowoman-gender-identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'woman'}
                            />
                            <label htmlFor="wowoman-gender-identity">Woman</label>


                            <input type="radio"
                                name="gender_identity"
                                id="more-gender-identity"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'more'}
                            />
                            <label htmlFor="more-gender-identity">More</label>

                        </div>
                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input type="checkbox"
                            name="show-gender"
                            id="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input type="radio"
                                name="gender_interest"
                                id="man-gender-interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'man'}
                            />
                            <label htmlFor="man-gender-interest">Man</label>


                            <input type="radio"
                                name="gender_interest"
                                id="wowoman-gender-interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'woman'}
                            />
                            <label htmlFor="wowoman-gender-interest">Woman</label>


                            <input type="radio"
                                name="gender_interest"
                                id="everyone-gender-interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About Me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks ..."
                            value={formData.about}
                            onChange={handleChange} />

                        <input type="submit" />

                    </section>

                    <section>
                        <label htmlFor="photo">Profile Photo</label>
                        <input
                            id="url"
                            type="url"
                            name="url"
                            onChange={handleChange}
                            required={true}
                        />


                        <div className="photo-container">
                            <img src={formData.url} alt="Profile Picture Preview" />
                        </div>
                    </section>

                </form>
            </div>
        </div>
    )
}

export default Onboarding;