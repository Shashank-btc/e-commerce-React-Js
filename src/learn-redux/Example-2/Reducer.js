import { decrease, incerase } from "./Constantfile"

const intialValue={
    count : 1
}

// console.log("check", intialValue.count)
function ReducerCount (state = intialValue, actions){
    switch(actions.type){
        case decrease : return {
            ...state, count : state.count -1
        } 
        case incerase : return {
            ...state, count : state.count +1
        }
        default : return  state
    }

}
export default ReducerCount