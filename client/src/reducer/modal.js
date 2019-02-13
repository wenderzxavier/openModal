import { CHANGE_DATA } from '../actions/Constants';

const initialState = {
    data: ''
}

const modalReducer = (state = initialState, action) => {
    const { folderName } = action;
    switch(action.type){
        case CHANGE_DATA:
            return {
                ...state,
                data: {
                    folderName
                }
            };
        default:
            return state;
    }
}

export default modalReducer;