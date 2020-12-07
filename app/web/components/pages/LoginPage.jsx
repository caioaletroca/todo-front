import React from 'react';
import { Formik } from 'formik';

// Components
import Button from 'web/components/commons/Button';
import TextField from 'web/components/commons/TextField';

// Styles
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';

// Schemas
import { loginSchema } from 'core/schemas/userSchema';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    paper: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2)
    }
}));

const initialValues = {
    login: 'caio.troti',
    password: 'Teste123',
}

export default function LoginPage () {
    const classes = useStyles();

    const handleSubmit = values => {

    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography>ToDo UNESP</Typography>
                <Formik
                    validationSchema={loginSchema}
                    initialValues={initialValues}
                    validateOnBlur
                    onSubmit={handleSubmit}>
                    {({
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                name='login'
                                label='Usuário'
                                value={values.login}
                                touched={touched}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outlined'
                                margin='normal'
                                fullWidth
                                required
                            />
                            <TextField
                                name='password'
                                label='Senha'
                                type='password'
                                value={values.password}
                                touched={touched}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outlined'
                                margin='normal'
                                fullWidth
                                required
                            />
                            <Box
                                display='flex'
                                justifyContent='center'
                                marginTop='2em'>
                                <Button
                                    type='submit'
                                    default
                                    color='primary'
                                    variant='contained'>
                                    Entrar
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Paper>
        </div>
    );
}