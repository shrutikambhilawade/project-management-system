import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userRelated/userSlice';

import { teacherReducer } from './teacherRelated/teacherSlice';

import {projectReducer} from "./projectRelated/projectSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        projectlist: projectReducer,
        teacher: teacherReducer,     
    },
});

export default store;
