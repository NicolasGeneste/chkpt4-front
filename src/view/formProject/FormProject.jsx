import React, { useState } from 'react';
import axios from 'axios';

function FormProject(props) {
    const [form, setForm] = useState({
        title: '',
        language: '',
        description: '',
        site: '',
        github: '',
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        console.log('form');
        await axios.post(`http://localhost:8000/project/`, form);
    };

    return (
        <div>
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="language"
                value={form.language}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="site"
                value={form.site}
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="gitHub"
                value={form.gitHub}
                onChange={handleChange}
            ></input>
            <button onClick={handleSubmit}>Envoyer</button>
        </div>
    );
}

export default FormProject;
