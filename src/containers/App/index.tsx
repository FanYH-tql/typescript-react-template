import * as React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
class App extends React.Component<RouteConfig, null> {
    public render() {
        return <div className='App'>{renderRoutes(this.props.routes)}</div>
    }
}
export default App
