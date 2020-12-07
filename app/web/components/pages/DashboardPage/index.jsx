import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from "react-router";
import { Switch } from "react-router-dom";

// Components
import Header from 'web/components/commons/Header';
import Sidebar from 'web/components/commons/Sidebar';

// Pages
import TodoView from './TodoView';
import ConfigurationView from './ConfigurationView';
import AboutView from './AboutView';

// Actions
import { push as pushAction } from 'connected-react-router';

export default function DashboardPage () {
    const dispatch = useDispatch();
    const push = bindActionCreators(pushAction, dispatch);

    React.useEffect(() => {
        push('/dashboard/todos');
    }, []);

    return (
        <div className='app'>
            <Header />
            <div className='content'>
                <Sidebar />
                <Switch>
                    <Route
                        exact
                        path='/dashboard/todos'
                        render={(...props) => <TodoView {...props} />}
                    />
                    <Route
                        exact
                        path='/dashboard/config'
                        render={(...props) => <ConfigurationView {...props} />}
                    />
                    <Route
                        exact
                        path='/dashboard/about'
                        render={(...props) => <AboutView {...props} />}
                    />
                </Switch>
            </div>
        </div>
    )
}