import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';

// Components
import Button from 'web/components/commons/Button';
import TextField from 'web/components/commons/TextField';

// Styles
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';

// Schemas
import { configurationSchema } from 'core/schemas/userSchema';

// Actions
import { userDataActions } from 'core/actions';

// Selectors
import { getUserData, getUserDataPutState } from 'core/selectors';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1)
    }
}))

const initialValues = {
    name: ''
}

export default function ConfigurationView () {
    const dispatch = useDispatch();
    const UserData = {
        put: bindActionCreators(userDataActions.put, dispatch)
    }
    const userData = useSelector(getUserData);
    const { loading } = useSelector(getUserDataPutState);

    const handleSubmit = values => UserData.put.fetch(values);

    const formikValues = Object.assign({}, initialValues, userData);

    const classes = useStyles();

    return (
        <div className='view'>
            <Typography
                variant='h5'
                gutterBottom>
                Configurações
            </Typography>
            <Formik
                initialValues={formikValues}
                validateOnBlur
                validationSchema={configurationSchema}
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
                        <Paper className={classes.paper}>
                            <TextField
                                name='name'
                                label='Nome Completo'
                                value={values.name}
                                touched={touched}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outlined'
                                margin="normal"
                                fullWidth
                                required
                            />
                        </Paper>
                        <Box
                            display='flex'
                            justifyContent='flex-end'
                            alignItems='center'>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                loading={loading}>
                                Salvar
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </div>
    );
}