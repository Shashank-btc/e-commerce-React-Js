import { decrease, incerase } from "./Constantfile"
import { createSlice } from '@reduxjs/toolkit'



const intialValue = {
    count : 1,
    showData : true
}

export const counterSlice = createSlice({
  name : 'counter',
  initialState : intialValue,
  reducers :{
    incerase(state) {
        state.count++
    },
    decrease(state) {
        state.count--
    },
    inceraseBy5(state, actions) {
        state.count = state.count + actions.payload
    },
    ToggleEvent(state) {
        state.showData = !state.showData
    }
  }
})


const authState = {
    isLogin : false
}
export const authSlicer = createSlice({
    name : 'auth',
    initialState : authState,
    reducers :{
        login(state) {
            state.isLogin = true
        },
        logout(state){
            state.isLogin = false
        }
    }
})
// console.log("check", intialValue.count)
function ReducerCount (state = intialValue, actions){
    switch(actions.type){
        case decrease : return {
            ...state, count : state.count -1
        } 
        case incerase : return {
            ...state, count : state.count +1
        } 
        case 'increaseBy5' : return{
            ...state, count : state.count + actions.amount
        }
        case 'taggle' : return{
            ...state, showData : !state.showData
        }
        default : return  state
    }

}
export default ReducerCount