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
import { registerSchema } from 'core/schemas/userSchema';

// Actions
import { authActions } from 'core/actions';

// Selectors
import { getAuthRegisterState } from 'core/selectors';

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
    name: "Caio Troti",
    login: 'caio.troti',
    password: 'Teste123',
}

export default function RegisterPage () {
    const dispatch = useDispatch();
    const Auth = {
        register: bindActionCreators(authActions.register, dispatch)
    }
    const { loading } = useSelector(getAuthRegisterState);

    const handleSubmit = values => Auth.register.fetch(values);

    const classes = useStyles();

    return (
        <div className='content'>
            <div className='view'>
                <Paper className={classes.paper} elevation={5}>
                    <Typography
                        variant='h5'
                        gutterBottom>
                        Cadastre-se
                    </Typography>
                    <Formik
                        validationSchema={registerSchema}
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
                                    name='name'
                                    label='Nome Completo'
                                    value={values.name}
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
                                        Cadastrar
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                    <Box
                        marginTop='2em'>
                        <Link to='/login'>Já é cadastrado? Entre agora.</Link>
                    </Box>
                </Paper>
            </div>
        </div>
    );
}