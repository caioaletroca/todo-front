import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styles
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

// Actions
import { push as pushAction } from 'connected-react-router';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        color: grey[800],
        backgroundColor: grey[300],
        zIndex: 10,
        boxShadow: "1px 0px 10px 0px rgba(0,0,0,0.75)",
	    transition: "left 200ms ease-in",
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        padding: theme.spacing(2),
        paddingLeft: 0,

        "&:hover": {
            backgroundColor: grey[400],
        }
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: theme.spacing(6)
    },
    text: {
        fontSize: theme.typography.h6.fontSize
    },
    active: {
        backgroundColor: grey[400],
    }
}));

export function SidebarItem ({ icon, label, path, onClick }) {
    const classes = useStyles();

    return (
        <div className={classes.item} onClick={() => onClick(path)}>
            <div className={classes.icon}>
                <i className={`fas fa-${icon} fa-lg`} />
            </div>
            <div className={classes.text}>{label}</div>
        </div>
    );
}

export default function Sidebar () {
    const dispatch = useDispatch();
    const push = bindActionCreators(pushAction, dispatch);

    const handleClick = path => push(path)

    const classes = useStyles();

    const items = [
        {
            label: "Tarefas",
            icon: 'tasks',
            path: '/dashboard/todos'
        },
        {
            label: "Configurações",
            icon: 'cogs',
            path: '/dashboard/config'
        },
        {
            label: "Sobre",
            icon: 'info-circle',
            path: '/dashboard/about'
        },
        {
            label: "Sair",
            icon: 'sign-out-alt',
            path: '/logout'
        },
    ]

    return (
        <div className={classes.root}>
            {items.map((item, index) => (
                <SidebarItem
                    key={index}
                    onClick={handleClick}
                    {...item}
                />
            ))}
        </div>
    );
}