import React from 'react';
import { createUseStyles } from 'react-jss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

const useStyles = createUseStyles({
    container: {
        backgroundColor: '#2A2A3F',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
    },
    img: {
        height: '300px',
    },
});

function Details(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.col1} style={{ width: '50%' }}>
                <img
                    className={classes.img}
                    src="../../../public/assets/NMG.jpg"
                    alt="Nicolas"
                />
                <p>
                    En formation de développeur web au sein de la Wild Code
                    School de Bordeaux, j'apprends et développe mes compétences
                    dans la programmation. J'ai opté pour l'option JavaScript,
                    React et Node.js. Je suis à la recherche d'expériences me
                    permettant de concrétiser cette reconversion. Mes
                    principales qualités : ✓ Dynamique ✓ Persévérant ✓ Travail
                    d'équipe
                </p>
                <div>
                    <h3>Voir mon CV</h3>
                </div>
            </div>
            <div className={classes.col2} style={{ width: '50%' }}>
                <div>
                    <h3>Front-End</h3>
                    <AndroidIcon />
                </div>
                <div>
                    <h3>Back-End</h3>
                    <AppleIcon />
                </div>
                <div>
                    <h3>Divers</h3>
                    <GitHubIcon />
                </div>
                <div>
                    <h3>Mes réseaux</h3>

                    <LinkedInIcon />
                </div>
                <div>
                    <h3>Me contacter</h3>
                    <ContactMailIcon />
                </div>
                <div>
                    <h3>Voir mon CV</h3>
                    <VisibilityIcon />
                </div>
            </div>
        </div>
    );
}

export default Details;
