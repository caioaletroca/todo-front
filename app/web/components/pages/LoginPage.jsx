import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// Components
import Button from 'web/components/commons/Button';
import TextField from 'web/components/commons/TextField';

// Styles
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';

// Schemas
import { loginSchema } from 'core/schemas/userSchema';

// Actions
import { authActions } from 'core/actions';

// Selectors
import { getAuthAuthenticateState } from 'core/selectors';

const useStyles = makeStyles(theme => ({
    paper: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: theme.spacing(2)
    }
}));

const initialValues = {
    login: '',
    password: '',
}

export default function LoginPage () {
    const dispatch = useDispatch();
    const Auth = {
        authenticate: bindActionCreators(authActions.authenticate, dispatch)
    }
    const { loading } = useSelector(getAuthAuthenticateState);

    const handleSubmit = values => Auth.authenticate.fetch(values);

    const classes = useStyles();

    return (
        <div className='content'>
            <div className='view'>
                <Paper className={classes.paper}>
                    <Typography
                        variant='h4'
                        gutterBottom>
                        ToDos UNESP
                    </Typography>
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
                                        variant='contained'
                                        loading={loading}>
                                        Entrar
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                    <Box
                        marginTop='2em'>
                        <Link to='/register'>Cadastre-se</Link>
                    </Box>
                </Paper>
            </div>
        </div>
    );
}