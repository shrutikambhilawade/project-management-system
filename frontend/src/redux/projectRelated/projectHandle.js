import axios from 'axios';
import {
    getRequest,
    doneSuccess,
    getError,
    authRequest,
    authFailed,
    stuffAdded,
    authError,
    // doneSuccess,
    // getRequest,
    // getFailed,
    // getError,
} from './projectSlice';
const REACT_APP_BASE_URL = "http://localhost:5000"


export const getProjectDetails = (address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${REACT_APP_BASE_URL}/${address}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const saveProjectDetails = (fields, address) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const result = await axios.post(`${REACT_APP_BASE_URL}/${address}Create`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (result.data.message) {
            dispatch(authFailed(result.data.message));
        } else {
            dispatch(stuffAdded(result.data));
        }
    } catch (error) {
        dispatch(authError(error));
    }
};
