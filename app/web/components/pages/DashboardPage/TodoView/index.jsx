import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import EmptyMessage from 'web/components/commons/EmptyMessage';
import NewTodoPaper from './NewTodoPaper';
import TodoItem from './TodoItem';

// Styles
import { Box, CircularProgress, List, Paper } from '@material-ui/core';

// Actions
import { todoActions, userDataActions } from 'core/actions';

// Selectors
import { getTodoGetState, getTodos, getUserData } from 'core/selectors';

export default function TodoView () {
    const dispatch = useDispatch();
    const UserData = {
        get: bindActionCreators(userDataActions.get, dispatch)
    }
    const Todo = {
        get: bindActionCreators(todoActions.get, dispatch)
    }
    const userData = useSelector(getUserData);
    const todos = useSelector(getTodos);
    const { loading } = useSelector(getTodoGetState);

    React.useEffect(() => {
        UserData.get.fetch(null, {
            callback: () => {
                Todo.get.fetch(null, {
                    user_id: userData.id
                })
            }
        });
    }, []);

    return (
        <div className='view'>
            <NewTodoPaper />
            <Paper>
                <List>
                    {
                        !loading && Object.values(todos).length === 0 &&
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            padding='2em'>
                            <EmptyMessage />
                        </Box>
                    }
                    {
                        loading &&
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            padding='2em'>
                            <CircularProgress />
                        </Box>
                    }
                    {
                        !loading && Object.values(todos).length > 0 &&
                        Object.values(todos).map((todo, index) => (
                            <TodoItem
                                key={index}
                                {...todo}
                            />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}