import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from '../../services/apiService';

export const fetchTasksAsync = createAsyncThunk(
    'tasks/fetchTasks',
    async (token, thunk) => {
        try {
            const data = await getData(token, '/tarefas');
            return data.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const createTaskAsync = createAsyncThunk(
    'tasks/createTask',
    async ({ token, taskData }, thunk) => {
        try {
            const data = await postData(token, '/tarefas', taskData);
            return data.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response?.data || error.message);
        }
    }
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // Removendo o addTask do reducers pois agora usaremos o thunk
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchTasksAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
                state.error = null;
            })
            .addCase(fetchTasksAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(createTaskAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createTaskAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks.push(action.payload);
                state.error = null;
            })
            .addCase(createTaskAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer; 