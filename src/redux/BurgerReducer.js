const burgerState = {
    burger: 
    [{name:'salad',amount:1,price:10},{name:'cheese',amount:1,price:20},{name:'beef',amount:1,price:55}],
   }

const BurgerReducer = (state = burgerState,action)=>{
    
    switch (action.type){
        case 'UPDATE_AMOUNT':{
            let burgerNew = [...state.burger]
            let index = burgerNew.findIndex(burger=>burger.name === action.name)
            if (index !== -1){
                if (action.number){
                    burgerNew[index].amount +=1;
                }else{
                    burgerNew[index].amount -=1;
                }
            }
            state.burger = burgerNew
            return {...state}
        }
    }

    return {...state}
}
export default BurgerReducer;