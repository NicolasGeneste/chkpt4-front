import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: '#E4AE28',
        textAlign: 'center',
        fontFamily: 'gotu',
        color: 'white',
    },
});

function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <p>
                @Copyright 2021 - Nicolas Monmège-Geneste. Tous droits réservés
            </p>
            <p>
                Plan du site | Mentions légales | Politique de confidentialité
            </p>
        </div>
    );
}

export default Footer;
