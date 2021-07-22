import React from 'react';
import { createUseStyles } from 'react-jss';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const useStyles = createUseStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        backgroundColor: '#2A2A3F',
    },
});

function Home(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Home;
