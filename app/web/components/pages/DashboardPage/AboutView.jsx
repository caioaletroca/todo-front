import { List, ListItem, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2)
    },
    list: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    }
}))

export default function AboutView () {
    const classes = useStyles();

    const students = [
        {
            name: "Caio Alexandre Troti Caetano",
            document: "152270401"
        },
        {
            name: "Gabriel Chicoli Nunes Rosa",
            document: ""
        },
        {
            name: "Renan Yui Hebita",
            document: "132271151"
        },
        {
            name: "Robson Luiz Fernandes Junior",
            document: "152270817"
        },
    ]

    return (
        <div className='view'>
            <Typography
                variant='h5'
                gutterBottom>
                Sobre o aplicativo
            </Typography>
            <Paper
                className={classes.paper}
                elevation={5}>
                <Typography
                    variant='body2'
                    gutterBottom>
                    Nosso objetivo é implementar um software de organização de rotinas para que universitários possam enxergar uma lista de tudo que precisa fazer em um só lugar.
                </Typography>
                <Typography
                    variant='body2'
                    gutterBottom>
                    O software foi desenvolvido pelos estudantes:
                </Typography>
                <Paper className={classes.list}>
                    <List dense>
                        {students.map(({ name, document }, index) => (
                            <ListItem
                                key={index}
                                button
                                divider={index !== students.length - 1}>
                                <ListItemText
                                    primary={name}
                                    secondary={document}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
                <Typography
                    variant='body2'
                    gutterBottom>
                    ToDos UNESP, sua ferramenta para organizar as tarefas do dia-a-dia.
                </Typography>
            </Paper>
        </div>
    )
}