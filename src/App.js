import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// routes
import { AppRoutes } from './routes';

// import layouts
const AppLayout = lazy(() => import('./layouts/AppLayout'));
const HeroLayout = lazy(() => import('./layouts/HeroLayout'));

function App() {
  return (
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
  );
}

export default App;
