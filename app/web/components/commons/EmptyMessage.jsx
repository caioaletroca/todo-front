import React from 'react';

// Styles
import { makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
    root: {
        userSelect: 'none',
        color: grey[500],
    }
}))

export default function EmptyMessage ({ content = "Nenhum resultado encontrado" }) {
    const classes = useStyles();

    return (
        <Typography
            className={classes.root}
            variant='caption'>
            {content}
        </Typography>
    )
}