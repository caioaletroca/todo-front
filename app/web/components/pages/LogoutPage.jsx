import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { push as pushAction } from 'connected-react-router';
import { authActions } from 'core/actions';

export default function LogoutPage () {
    const dispatch = useDispatch();
    const push = bindActionCreators(pushAction, dispatch);
    const Auth = {
        logout: bindActionCreators(authActions.logout, dispatch)
    }

    React.useEffect(() => {
        Auth.logout();
        push('/login');
    }, []);

    return null
}