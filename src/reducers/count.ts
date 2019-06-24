import { CountType } from './../types/constants';
import { ICountState } from './../types/states';
import IActions from 'src/types/actions';
const initialState: ICountState = {
  num: 1
}
export default (state = initialState, actions: IActions):ICountState  => {
  switch(actions.type) {
    case CountType.ADD_NUM:
      return {
        ...state,
        num: state.num + 1
      }
    case CountType.SUB_NUM:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
} 