import  {buy_book, sell_book}  from "./BookType"


export const purchase_book =()=> {
    return{
        type : buy_book
    }
}  

export function sellBook(){
    return{
        type : sell_book
    }
}

