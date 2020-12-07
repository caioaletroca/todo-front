import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import { AppBar, makeStyles, Typography } from '@material-ui/core';

// Selectors
import { getUserData } from 'core/selectors';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
    },
    spacing: {
        margin: 'auto',
    }
}))

export default function Header () {
    const userData = useSelector(getUserData);

    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Typography>
                ToDos UNESP
            </Typography>
            <div className={classes.spacing} />
            <Typography>
                Olá, {userData.name}
            </Typography>
        </AppBar>
    )
}