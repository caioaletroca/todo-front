import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// Pages
import HomePage from 'web/components/pages/HomePage';
import LoginPage from 'web/components/pages/LoginPage';
import LogoutPage from 'web/components/pages/LogoutPage';
import RegisterPage from 'web/components/pages/RegisterPage';
import DashboardPage from 'web/components/pages/DashboardPage';

// Components
import Page from "web/components/commons/Page";
import Notifier from "web/components/commons/Notifier";

// Font Awesome imports
import "@fortawesome/fontawesome-free/css/all.min.css";

// Styles
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "web/components/styles";

export default function App () {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <Notifier />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                    />
                    <Route
                        exact
                        path="/login"
                        component={LoginPage}
                    />
                    <Route
                        exact
                        path="/logout"
                        component={LogoutPage}
                    />
                    <Route
                        exact
                        path="/register"
                        component={RegisterPage}
                    />
                    <Page
                        path="/dashboard"
                        render={(...props) => <DashboardPage {...props} />}
                    />
                </Switch>
            </SnackbarProvider>
        </ThemeProvider>
    )
}