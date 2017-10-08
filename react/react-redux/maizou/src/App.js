import React, { Component } from 'react';

import store from './store'
import { connect}  from 'react-redux'
import Top from './components/Top'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        我是首页

        <button onClick={this.props.change}>点击我修改头部title</button>
      </div>
    );
  }

  // change() {
  //   store.dispatch({
  //     type: 'CHANGETITLE',
  //     title: '我是底部'
  //   })
  // }
}

export default connect(
  // 输入逻辑
  function (state) {
    return {

    }
  },
  // 输出逻辑
  {
    change: function() {
      // return 一个 action
      return {
        type: 'CHANGETITLE',
        title: '我是底部'
      }
    }
  }
)(App)
