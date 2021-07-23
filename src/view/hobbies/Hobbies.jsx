import React from 'react';
import { createUseStyles } from 'react-jss';
import Card from '../../common/Card';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-between',
        backgroundColor: '#2A2A3F',
        height: '946px',
    },
});

function Hobbies(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Card title="EMBAUCHER UN JUNIOR" width="298px" height="298px" />
            <Card title="MES SECRETS" width="144px" height="144px" />
            <Card title="KONAMI CODE" width="86px" height="86px" />
            <Card title="BLAGUES DE DEV" width="196px" height="196px" />
            <Card title="CODING GAME" width="172px" height="172px" />
            <Card title="BOUTTON D'URGENCE" width="112px" height="112px" />
            <Card
                className={classes.card7}
                title="PREUVE SOCIALE"
                width="344px"
                height="344px"
            />
        </div>
    );
}

export default Hobbies;
