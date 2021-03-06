import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import Layout from './Layout'
import Home from '../pages/Home'
import IncidentDetailsContainer from '../pages/IncidentDetailsContainer'
import PageNotFound from '../components/PageNotFound'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/incidents/:incidentId" component={IncidentDetailsContainer}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App