import { createMuiTheme, ThemeProvider } from "@mui/material";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// routes
import { AppRoutes } from "./routes";

// import layouts
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const HeroLayout = lazy(() => import("./layouts/HeroLayout"));

// Custom Themes Material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#E1F4F3",
    },
    alt: "#7D6C61",
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightSemiBold: 500,
    fontWeightBold: 600,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<></>}>
          <Switch>
            {AppRoutes.map((route) => {
              const { component: Component, path, exact, heroLayout } = route;
              return (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  heroLayout={heroLayout}
                  render={(props) => {
                    if (heroLayout) {
                      return (
                        <HeroLayout>
                          <Component {...props} />
                        </HeroLayout>
                      );
                    } else {
                      return (
                        <AppLayout>
                          <Component {...props} />
                        </AppLayout>
                      );
                    }
                  }}
                />
              );
            })}

            <Redirect from="*" to="/error-404" />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
