import axios from 'axios';
import React from 'react';

function ItemProject({ title, language, description, site, gitHub }) {
    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/project/`, `${id}`);
    };
    return (
        <div>
            <p>{title}</p>
            <p>{language}</p>
            <p>{description}</p>
            <p>{site}</p>
            <p>{gitHub}</p>
            <button onClick={handleDelete}>Supprimer</button>
        </div>
    );
}

export default ItemProject;
