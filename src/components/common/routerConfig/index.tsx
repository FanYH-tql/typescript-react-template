import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
const renderRoutes = (routes: any, extraProps = {}, switchProps = {}) =>
    routes ? (
        <Switch {...switchProps}>
            {routes.map((route: any, i: any) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={props => (
                        <route.component
                            {...props}
                            {...extraProps}
                            route={route}
                        />
                    )}
                />
            ))}
        </Switch>
    ) : null
export default renderRoutes
