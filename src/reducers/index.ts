import { combineReducers } from 'redux'
import count from './count'
const rootReducer = combineReducers({
  count
})
export default rootReducer
export type AppState = ReturnType<typeof rootReducer>