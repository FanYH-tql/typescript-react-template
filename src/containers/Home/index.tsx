import * as React from 'react'
import connect from 'src/utils/connect';
import actions from '../../actions'
import AppProps from 'src/types';
import '../../assets/style/index.scss'
@connect(state => {
  return {
    num: state.count.num
  }
}, (dispatch) => ({
  addCount() {
    dispatch(actions.count.addCount())
  },
  subCount() {
    dispatch(actions.count.subCount())
  }
}))
class Home extends React.Component<AppProps> {
    public handleAddClick = () => {
      this.props.addCount()
    }
    public handleSubClick = () => {
      this.props.subCount()
    }
    public render() {
        return (
            <div className='App'>
                <button onClick={this.handleAddClick}>+</button>
                <button onClick={this.handleSubClick}>-</button>
                <h1>{this.props.num}</h1>
            </div>
        )
    }
}
export default Home
