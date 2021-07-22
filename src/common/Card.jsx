import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'gotu',
        color: 'white',
        textAlign: 'center',
    },
    card: {
        borderRadius: '360%',
        backgroundColor: '#E4AE28',
    },
});

function Card({ title, backgroundImage, width, height }) {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <div
                className={classes.card}
                style={{ backgroundImage, width, height }}
            ></div>
            <div>
                <h2 className={classes.title}>{title}</h2>
            </div>
        </div>
    );
}

export default Card;
