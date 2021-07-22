import React, { useState } from 'react';
import axios from 'axios';

function FormMessage(props) {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        object: '',
        message: '',
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        console.log('form');
        await axios.post(`http://localhost:8000/message/`, form);
    };

    return (
        <div>
            <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="object"
                value={form.object}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
            ></input>
            <button onClick={handleSubmit}>Envoyer</button>
        </div>
    );
}

export default FormMessage;
