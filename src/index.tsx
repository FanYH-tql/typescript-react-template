import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import renderRoutes from './components/common/routerConfig'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import routes from './router'
const render = (Component: any) => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <AppContainer>{Component}</AppContainer>
            </Provider>
        </Router>,
        document.getElementById('root') as HTMLElement
    )
}
render(renderRoutes(routes))
if ((module as any).hot) {
    ;(module as any).hot.accept('./router', () => {
        render(renderRoutes(routes))
    })
}
registerServiceWorker()
