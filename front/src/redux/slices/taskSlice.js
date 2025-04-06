import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, putData, deleteData } from '../../services/apiService';

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

export const updateTaskAsync = createAsyncThunk(
    'tasks/updateTask',
    async ({ token, taskData }, thunk) => {
        try {
            const data = await putData(token, `/tarefas/${taskData.id}`, taskData);
            return data.data;
        } catch (error) {
            return thunk.rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const deleteTaskAsync = createAsyncThunk(
    'tasks/deleteTask',
    async ({ token, taskId }, thunk) => {
        try {
            await deleteData(token, `/tarefas/${taskId}`);
            return taskId;
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
            })
            .addCase(updateTaskAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateTaskAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
                state.error = null;
            })
            .addCase(updateTaskAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteTaskAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteTaskAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
                state.error = null;
            })
            .addCase(deleteTaskAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default taskSlice.reducer; 