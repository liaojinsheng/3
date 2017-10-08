import { createStore } from 'redux'

function reducer(state, action) {

   switch (action.type) {
        case "CHANGETITLE":
            // return 出去的数据 ，就是 state 
            // 将 title 进行修改

            // **** 必须返回一个全新的对象
            // state.title = action.title;
            // console.log(state);

            return Object.assign({}, state, {
                title: action.title
            })
            // return {
            //     title: action.title,
            //     age: 18
            // }
        default: 
            // 默认的初始数据
            return {
                title: 'asdfasdfasd',
                age: 18
            }
   }
}


export default createStore(reducer)