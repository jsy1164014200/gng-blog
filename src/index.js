import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store.js";

import Index from "./containers/main/main.jsx"
import Admin from './containers/admin/admin.jsx'
import NotFoundPage from './containers/notfound/notfound.jsx'
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=>(<Redirect to="/app/index" push/>)}/>
                <Route path='/app' component={Index}/>
                <Route path='/admin' component={Admin}/>
                <Route path='/404' component={NotFoundPage} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter> 
    </Provider>
    ), document.getElementById('root'));

