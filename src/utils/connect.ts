import { AppState } from './../reducers/index';
import { connect as Connect } from 'react-redux';
import { Dispatch } from 'react';
export default function connect<T>(mapStateToProps: ((state: AppState) => Partial<T>), mapDispatchToProps?: Dispatch<any>) {
  return function(target: any): any {
    return Connect(mapStateToProps, mapDispatchToProps)(target)
  }
}