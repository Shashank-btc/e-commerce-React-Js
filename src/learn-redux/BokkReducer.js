import { buy_book, sell_book } from "./BookType"

const intialState = {
    NumberOfBooks : 20

}
const BookReducer =(state = intialState, actions)=>{
    switch(actions.type){ 
        case buy_book : return{
            ...state, NumberOfBooks : state.NumberOfBooks -1
        }
        case sell_book : return{
            ...state, NumberOfBooks : state.NumberOfBooks+1
        }
        default : return state
    }
}

export default BookReducer;