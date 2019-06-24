import { CountType } from './constants';
export interface IAddCountAction {
  type: CountType
}
export interface ISubCountAction {
  type: CountType
}

export default interface IActions extends IAddCountAction, ISubCountAction{
  addCount():IAddCountAction,
  subCount(): ISubCountAction
}