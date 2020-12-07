import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// Pages
import LoginPage from 'web/components/pages/LoginPage';

// Components
import Notifier from "web/components/commons/Notifier";

// Font Awesome imports
import "@fortawesome/fontawesome-free/css/all.min.css";

// Styles
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "web/components/styles";

export default function App () {
    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <SnackbarProvider>
                    <Notifier />
                    <Switch>
                        <Route
                            exact
                            path="/login"
                            component={LoginPage}
                        />
                    </Switch>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    )
}