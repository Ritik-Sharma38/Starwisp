import {
    ADD_ITEM_NOTEPAD,
} from '../actions/types'

const DEFAULT_STATE={
    addItem: false
}
export default (state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case ADD_ITEM_NOTEPAD:
            return {
                ...state,
                addItem: action.payload
            }
        default:
            return state
    }
}
