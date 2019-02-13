import {  CHANGE_DATA, CHANGE_VARIABLES } from './Constants';

export const changeData = (folderName) => {
    return{
        type: CHANGE_DATA,
        folderName
    }
}

export const changeVariables = (algorithm, variables) => {
    return{
        type: CHANGE_VARIABLES,
        algorithm,
        variables
    }
}