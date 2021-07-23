import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        backgroundColor: '#2A2A3F',
        height: '946px',
    },
});

function FormProject(props) {
    const classes = useStyles();
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
        <div className={classes.wrapper}>
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Titre"
            ></input>
            <input
                type="text"
                name="language"
                value={form.language}
                onChange={handleChange}
                placeholder="Langages"
            ></input>
            <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
            ></input>
            <input
                type="text"
                name="site"
                value={form.site}
                onChange={handleChange}
                placeholder="Lien du site"
            ></input>
            <input
                type="text"
                name="gitHub"
                value={form.gitHub}
                onChange={handleChange}
                placeholder="Lien github"
            ></input>
            <Link to="/allProjects">
                <button onClick={handleSubmit}>Envoyer</button>
            </Link>
        </div>
    );
}

export default FormProject;
