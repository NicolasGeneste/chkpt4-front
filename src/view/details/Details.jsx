import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
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
        height: '946px',
    },
    img: {
        height: '300px',
        width: '300px',
        borderRadius: '360%',
        margin: '0 auto',
    },
    col1: {
        fontSize: '30px',
        textAlign: 'justify',
        margin: '50px',
        width: '45%',
    },
    col2: {
        marginTop: '100px',
        fontSize: '30px',
        width: '50%',
    },
    line: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        color: '#E4AE28',
        marginLeft: '30px',
    },
});

function Details(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.col1}>
                <img
                    className={classes.img}
                    src="assets/NMG.jpg"
                    alt="Nicolas"
                />

                <p>
                    En formation de développeur web au sein de la Wild Code
                    School de Bordeaux, j'apprends et développe mes compétences
                    dans la programmation. J'ai opté pour l'option JavaScript,
                    React et Node.js. <br></br>Je suis à la recherche
                    d'expériences me permettant de concrétiser cette
                    reconversion.<br></br> Mes principales qualités : ✓
                    Dynamique ✓ Persévérant ✓ Travail d'équipe
                </p>
                <a
                    href="assets/cv.png"
                    alt="CV"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <div className={classes.line}>
                        <h3>Voir mon CV</h3>
                        <VisibilityIcon className={classes.icon} />
                    </div>
                </a>
            </div>
            <div className={classes.col2}>
                <div className={classes.line}>
                    <h3>Front-End</h3>
                    <AndroidIcon className={classes.icon} />
                </div>
                <div className={classes.line}>
                    <h3>Back-End</h3>
                    <AppleIcon className={classes.icon} />
                </div>
                <div className={classes.line}>
                    <h3>Divers</h3>
                    <GitHubIcon className={classes.icon} />
                </div>
                <div className={classes.line}>
                    <h3>Mes réseaux</h3>

                    <LinkedInIcon className={classes.icon} />
                </div>
                <Link
                    to="/message"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <div className={classes.line}>
                        <h3>Me contacter</h3>
                        <ContactMailIcon className={classes.icon} />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Details;
