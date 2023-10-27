import {createReducer,on} from '@ngrx/store'
import { initialState } from './couter.state'
import { decrement, increment, reset } from './couter.action'

const _couterReducer=createReducer(initialState,on(increment,(state)=>{
return {
    ...state,
    counter:state.counter + 1,
}
}),
on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter - 1,
    }
}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0
    }
})
)

export function couterReducer(state:any,action:any){
 return _couterReducer(state,action)
}