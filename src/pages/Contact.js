import React, { useState, useId } from "react";

function Contact() {
    const [formData, setFormData] = useState({
       name: "",
       email: "",
       message: "" 
    });

    const nameId = useId();
    const emailId = useId();
    const messageId = useId();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSumit = (e) => {
        e.preventDefault();
        console.log("Formulaire soumis:", formData);
        //send data
    };

    return (
        <section>
            <h2>Contactez-nous</h2>
            <img src="/img/doctor.png" alt="Hello"></img>
            <form onSubmit={handleSumit}>
                <div>
                    <label htmlFor={nameId}>Nom:</label>
                    <input 
                        id={nameId}
                        type="text"
                        name="{formData.name}"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor={emailId}>
                        <input
                            id={emailId}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor={messageId}>Message:</label>
                    <textarea
                        id={messageId}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );

}

export default Contact;