import { actionTypes } from '../actions/actionTypes';

const initialState = {
    pageId: -1,
    lastPageId: -1,
    currentStatus: [],
    completed: false,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.RESTART_PROGRAM:
            return initialState;
        case actionTypes.FINISH_PROGRAM:
            return { ...state, completed: true };
        case actionTypes.NEXT_WEEK:
            return {
                ...state,
                lastPageId: state.pageId + 1,
                pageId: state.pageId + 1,
                currentStatus: []
            };
        case actionTypes.SELECT_WEEK:
            return { ...state, pageId: action.payload };
        case actionTypes.UPDATE_WEEK:
            return { ...state, currentStatus: [...state.currentStatus, action.payload] };
        default:
            return state;
    }
}

export default reducer;