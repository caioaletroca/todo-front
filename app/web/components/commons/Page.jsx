import React from 'react';
import { Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { push as pushAction } from 'connected-react-router';

// Selectors
import { getAuth } from 'core/selectors';

export default function Page (props) {
    const dispatch = useDispatch();
    const push = bindActionCreators(pushAction, dispatch);
    const { logged } = useSelector(getAuth);

    if(!logged) {
        push("/login");
    }

    return <Route {...props} />
}