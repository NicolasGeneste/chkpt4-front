import React from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';

const useStyles = createUseStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '5px solid orange',
        width: '500px',
        height: '500px',
        color: 'white',
        margin: '40px',
        borderRadius: '360px',
    },
});

function ItemProject({ id, title, language, description, site, gitHub }) {
    const classes = useStyles();
    // const [refresh, setRefresh] = useState(false);
    const handleDelete = async () => {
        // setRefresh(true);
        await axios.delete(`http://localhost:8000/project/${id}`);
        // setRefresh(false);
    };

    //refresh pour suppression

    return (
        <div className={classes.card}>
            <p style={{ fontSize: '35px' }}>{title}</p>
            <p style={{ fontSize: '20px' }}>{language}</p>
            <p style={{ fontSize: '15px', marginLeft: '10px' }}>
                {description}
            </p>
            <img src={site} alt="" width="150px" height="200px" />
            <a href={gitHub} style={{ color: 'white', textDecoration: 'none' }}>
                Github
            </a>
            <button onClick={handleDelete}>Supprimer</button>
        </div>
    );
}

export default ItemProject;
