import React, { Component } from 'react'

import store from '../store'

// 引入 react-redux
import { connect } from 'react-redux'

// UI组件
class Top extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.age}</p>
            </div>
        )
    }
}

// 容器组件
export default connect(
    // 输入逻辑     ui组件要使用的数据，在这里定义
    // 这里的state 就是  redux 里面的数据 { title: ''}
    function (state) {
        return {
            title: state.title,
            age: state.age
        }
    }
    // 输出逻辑     ui组件的一些要修改state数据的方法在这里定义
)(Top)