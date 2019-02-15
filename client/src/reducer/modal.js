import { CHANGE_DATA, CHANGE_PTS_VARIABLES, CHANGE_SIGNATURE_VARIABLES } from '../actions/Constants';

const initialState = {
    data: '',
    algorithm: '',
    variables: {
        cluster: 0,
        seed: -5,
        iteractions: 0,
        test: 2,
        unitAreaSize: 2
    }
}

const modalReducer = (state = initialState, action) => {
    const { data, algorithm, cluster, seed, iteractions, test, unitArea } = action;
    switch (action.type) {
        case CHANGE_DATA:
            return {
                ...state,
                data
            };
        case CHANGE_PTS_VARIABLES:
            return{
                ...state,
                algorithm,
                variables: {
                    cluster,
                    seed,
                    iteractions
                },
            }
        case CHANGE_SIGNATURE_VARIABLES:
            return{
                ...state,
                algorithm,
                variables: {
                    unitArea,
                    test
                },
            }
        default:
            return state;
    }
}

export default modalReducer;