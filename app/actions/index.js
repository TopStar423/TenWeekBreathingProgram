import { actionTypes } from "./actionTypes";

export const restartProgram = () => (
    { type: actionTypes.RESTART_PROGRAM }
);

export const finishProgram = () => (
    { type: actionTypes.FINISH_PROGRAM }
);

export const goNextWeek = () => (
    { type: actionTypes.NEXT_WEEK }
);

export const selectWeek = pageId => (
    {
        type: actionTypes.SELECT_WEEK,
        payload: pageId
    }
);

export const updateWeek = newWeekProgram => (
    {
        type: actionTypes.UPDATE_WEEK,
        payload: newWeekProgram
    }
);