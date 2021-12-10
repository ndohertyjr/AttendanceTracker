/*
    Helper functions to create and return alert message for any actions user may take
*/

import { alertConstants } from '@/_constants';


// All available message action types
export const alertActions = {
    success,
    error,
    clear
}

// Returns success message for the action
function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

// Returns error message for the action
function error(message) {
    return { type: alertConstants.ERROR, message };
}

// Returns clear message for the action
function clear(message) {
    return { type: alertConstants.CLEAR, message };
}


