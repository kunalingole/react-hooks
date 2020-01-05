const intailState = [];
export const RegisterReducer = (state = intailState, action) => {
  
switch(action.type){
    case '':
        return {
         ...state,
         register:action.payload
        };
        default:
           return  state;

}

}