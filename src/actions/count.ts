import { CountType } from './../types/constants';
import { IAddCountAction, ISubCountAction } from './../types/actions';
export function addCount(): IAddCountAction {
  return {
    type: CountType.ADD_NUM
  }
}
export function subCount(): ISubCountAction {
  return {
    type: CountType.SUB_NUM
  }
}