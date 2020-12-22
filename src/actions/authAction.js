import { 
    ADD_ITEM_NOTEPAD 
} from "./types";

export const AddItemNotepad = (state) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: ADD_ITEM_NOTEPAD,
                payload: state
            })
        }catch(error){
            console.log("Error in Add item in notepad:", error)
        }
    }
}