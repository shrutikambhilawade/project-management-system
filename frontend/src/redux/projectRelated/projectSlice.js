import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    projectDetails: [],
    tempDetails: [],
    loading: false,
    error: null,
    response: null,
    darkMode: true
};

const projectSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authRequest: (state) => {
            state.status = 'loading';
        },
        // underControl: (state) => {
        //     state.status = 'idle';
        //     state.response = null;
        // },
        stuffAdded: (state, action) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
            state.tempDetails = action.payload;
        },
        // authSuccess: (state, action) => {
        //     state.status = 'success';
        //     // state.currentUser = action.payload;
        //     // state.currentRole = action.payload.role;
        //     localStorage.setItem('user', JSON.stringify(action.payload));
        //     state.response = null;
        //     state.error = null;
        // },
        authFailed: (state, action) => {
            state.status = 'failed';
            state.response = action.payload;
        },
        authError: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        // authLogout: (state) => {
        //     localStorage.removeItem('user');
        //     state.currentUser = null;
        //     state.status = 'idle';
        //     state.error = null;
        //     state.currentRole = null
        // },

        doneSuccess: (state, action) => {
            state.projectDetails = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        // getDeleteSuccess: (state) => {
        //     state.loading = false;
        //     state.error = null;
        //     state.response = null;
        // },

        getRequest: (state) => {
            state.loading = true;
        },
        // getFailed: (state, action) => {
        //     state.response = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // toggleDarkMode: (state) => {
        //     state.darkMode = !state.darkMode;
        // }
    },
});

export const {
     doneSuccess,
     getRequest,
     getError,
     authRequest,
     authFailed,
authError,
stuffAdded
} = projectSlice.actions;
export const projectReducer = projectSlice.reducer;





// getDeleteSuccess,
// getFailed,
// toggleDarkMode,
// authRequest,
// underControl,
// stuffAdded,
// authSuccess,
// authFailed,
// authError,
// authLogout,
