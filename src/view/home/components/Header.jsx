import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        fontSize: '72px',
        fontFamily: 'gotu',
        textAlign: 'center',
        margin: '0 auto',
        color: 'white',
    },
    subtitle: {
        fontSize: '32px',
        fontFamily: 'gotu',
        textAlign: 'center',
        margin: '0 auto',
        color: 'white',
        marginBottom: '80px',
    },
});

function Header(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Nicolas Monmège-Geneste </h1>
            <h2 className={classes.subtitle}>DEVELOPPEUR WEB ET WEB MOBILE</h2>
        </div>
    );
}

export default Header;
