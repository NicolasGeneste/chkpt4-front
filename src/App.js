import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './view/home/Home';
import FormMessage from './view/formMessage/FormMessage';
import FormProject from './view/formProject/FormProject';
import ListProjects from './view/formProject/components/ListProjects';
import Details from './view/details/Details';
import Hobbies from './view/hobbies/Hobbies';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/hobbies" render={() => <Hobbies />} />
                <Route exact path="/details" render={() => <Details />} />
                <Route
                    exact
                    path="/allProjects"
                    render={() => <ListProjects />}
                />
                <Route exact path="/message" render={() => <FormMessage />} />
                <Route exact path="/project" render={() => <FormProject />} />
            </Switch>
        </Router>
    );
}

export default App;
