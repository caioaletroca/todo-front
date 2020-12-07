import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import { AppBar, IconButton, makeStyles, Typography } from '@material-ui/core';

// Selectors
import { getSidebar, getUserData } from 'core/selectors';
import { bindActionCreators } from 'redux';

// Actions
import { sidebarActions } from 'core/actions';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    menuButton: {
        display: 'none',
        
        [theme.breakpoints.down('sm')]: {
            display: 'initial'
        },
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            margin: 'auto'
        },
    },
    spacing: {
        margin: 'auto',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    nameText: {
        display: 'initial',
        
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}))

export default function Header () {
    const dispatch = useDispatch();
    const Sidebar = {
        set: bindActionCreators(sidebarActions.set, dispatch)
    }
    const userData = useSelector(getUserData);
    const sidebar = useSelector(getSidebar);

    const handleMenu = () => Sidebar.set(!sidebar);

    const classes = useStyles();

    return (
        <AppBar position='relative' className={classes.root}>
            <IconButton className={classes.menuButton} onClick={handleMenu}>
                <i className='fas fa-bars' />
            </IconButton>
            <Typography className={classes.logo}>
                ToDos UNESP
            </Typography>
            <div className={classes.spacing} />
            <Typography className={classes.nameText}>
                Olá, {userData.name}
            </Typography>
        </AppBar>
    )
}