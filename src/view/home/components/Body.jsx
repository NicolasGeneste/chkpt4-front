import React from 'react';
import { createUseStyles } from 'react-jss';
import Card from '../../../common/Card';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
        marginBottom: '100px',
    },
});
function Body(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.card1}>
                <Link to="details" style={{ textDecoration: 'none' }}>
                    <Card
                        title="MA VIE"
                        backgroundImage="url(assets/imageA.jpg)"
                        width="400px"
                        height="400px"
                    />
                </Link>
            </div>
            <div className={classes.card2}>
                <Link to="allProjects" style={{ textDecoration: 'none' }}>
                    <Card
                        title="MES OEUVRES"
                        backgroundImage="url(assets/imageM.jpg)"
                        width="400px"
                        height="400px"
                    />
                </Link>
            </div>
            <div className={classes.card3}>
                <Link to="hobbies" style={{ textDecoration: 'none' }}>
                    <Card
                        title="MES PLAISIRS"
                        backgroundImage="url(assets/imageS.jpg)"
                        width="400px"
                        height="400px"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Body;
