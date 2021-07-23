import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import ItemProject from './ItemProject';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        backgroundColor: '#2A2A3F',
        height: '946px',
    },
});

function ListProjects(props) {
    const classes = useStyles();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/project/`).then(result => {
            setProjects(result.data);
        });
    }, []);

    return (
        <div className={classes.wrapper}>
            {projects.map(project => (
                <ItemProject key={project.id} {...project} />
            ))}
            <div>
                <Link to="/project">
                    <button>Créer un projet</button>
                </Link>
            </div>
        </div>
    );
}

export default ListProjects;
