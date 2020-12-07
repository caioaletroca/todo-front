import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import TextField from 'web/components/commons/TextField';

// Styles
import { CircularProgress, IconButton, InputAdornment, makeStyles, Paper, Typography } from '@material-ui/core';

// Actions
import { todoActions } from 'core/actions';

// Selectors
import { getTodoPostState, getUserData } from 'core/selectors';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))

export default function NewTodoPaper () {
    const dispatch = useDispatch();
    const Todo = {
        post: bindActionCreators(todoActions.post, dispatch)
    }
    const userData = useSelector(getUserData);
    const { loading } = useSelector(getTodoPostState);
    const [name, setName] = React.useState("");

    const handleChange = e => setName(e.target.value);

    const handleSend = (e) => {
        if(e && e.preventDefault) e.preventDefault();

        Todo.post.fetch({
            name,
        }, {
            user_id: userData.id,
            callback: () => setName("")
        })
    }

    const classes = useStyles();

    return (
        <Paper
            className={classes.root}
            elevation={5}>
            <Typography
                variant='h6'
                gutterBottom>
                Nova Tarefa
            </Typography>
            <form action="" noValidate onSubmit={handleSend}>
                <TextField
                    name='name'
                    placeholder='Escreva uma nova tarefa...'
                    value={name}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                {
                                    !loading ?
                                    <IconButton onClick={handleSend}>
                                        <i className='fas fa-arrow-circle-right' />
                                    </IconButton> :
                                    <CircularProgress size={25} />
                                }
                            </InputAdornment>
                        )
                    }}
                    variant='outlined'
                    fullWidth
                />
            </form>
        </Paper>
    )
}