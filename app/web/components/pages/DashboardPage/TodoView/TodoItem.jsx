import { ListItem, IconButton, ListItemSecondaryAction, ListItemText, makeStyles, ListItemIcon, Tooltip, CircularProgress, Box } from '@material-ui/core';
import { green, grey, red } from '@material-ui/core/colors';
import { todoActions } from 'core/actions';
import { getTodoPutState } from 'core/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'web/components/commons/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        "& .actions": { 
            display: 'none !important'
        },

        "&:hover": {
            "& .actions": {
                display: 'initial !important'
            },  
        }
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
    },
    completed: {
        color: grey[600],
        backgroundColor: green[200],
    },
    textCompleted: {
        textDecoration: 'line-through'
    },
    deleteButton: {
        color: red[800]
    }
}))

export default function TodoItem ({ id, name, is_completed }) {
    const dispatch = useDispatch();
    const Todo = {
        put: bindActionCreators(todoActions.put, dispatch),
        delete: bindActionCreators(todoActions.delete, dispatch)
    }
    const [loading, setLoading] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [editValue, setEditValue] = React.useState(name);

    const handleChange = e => setEditValue(e.target.value);

    const handleBlur = () => {
        setLoading(true);
        Todo.put.fetch({
            name: editValue
        }, {
            todo_id: id,
            callback: () => {
                setEdit(false);
                setLoading(false);
            }
        });
    }

    const handleCompleted = () => Todo.put.fetch({
        is_completed: !is_completed,
    }, {
        todo_id: id,
    });

    const handleDelete = () => {
        setLoading(true);
        Todo.delete.fetch(null, {
            todo_id: id,
            callback: () => {
                setLoading(false);
            }
        })
    }

    const classes = useStyles();

    return (
        <ListItem
            className={{
                [classes.root]: true,
                [classes.completed]: is_completed
            }}>
            <ListItemIcon>
                <Tooltip title={`Marcar como ${is_completed ? "não " : ""}concluída`}>
                    <IconButton
                        disabled={loading}
                        onClick={handleCompleted}>
                        <i className='fas fa-check-circle' />
                    </IconButton>
                </Tooltip>
            </ListItemIcon>
            {
                edit ?
                <TextField
                    name='name'
                    value={editValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={loading}
                    fullWidth
                /> :
                <ListItemText
                    className={{
                        [classes.textCompleted]: is_completed
                    }}
                    primary={name}
                />
            }
            <ListItemSecondaryAction className={[
                'actions',
                classes.actions
            ]}>
                {
                    loading &&
                    <CircularProgress size={25} />
                }
                {
                    edit || loading ?
                    null :
                    <Tooltip title='Editar'>
                        <IconButton
                            onClick={() => setEdit(true)}>
                            <i className='fas fa-edit' />
                        </IconButton>
                    </Tooltip>
                }
                {
                    !edit && !loading &&
                    <Tooltip title='Excluir'>
                        <IconButton
                            className={classes.deleteButton}
                            onClick={handleDelete}>
                            <i className='fas fa-times' />
                        </IconButton>
                    </Tooltip>
                }
            </ListItemSecondaryAction>
        </ListItem>
    )
}