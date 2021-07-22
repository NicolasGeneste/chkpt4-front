import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        backgroundColor: '#2A2A3F',
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
                <ListProjects key={project.id} {...project} />
            ))}
        </div>
    );
}

export default ListProjects;
