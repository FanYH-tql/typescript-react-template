import * as React from "react";
import { RouteConfig } from 'react-router-config'
/**
 * 异步加载模块
 * @param {*} importComponent 
 */
// interface IAsync extends IRoute{

// }
export default function asyncComponent(importComponent: any): any {
  class AsyncComponent extends React.Component<RouteConfig> {
    public state = {
      component: null
    };
    public async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }
    public render() {
      const C: any = this.state.component;
      const props = {
        ...this.props,
        route: this.props.route,
        routes: this.props.route.routes
      }
      return C ? <C {...props} /> : null;
    }
  }
  return AsyncComponent;
}