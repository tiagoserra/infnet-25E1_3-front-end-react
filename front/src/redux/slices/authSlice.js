import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from '../../services/apiService'

const userStoredKey = 'user-stored';

const userStored = localStorage.getItem(userStoredKey);
const parsedUser = userStored ? JSON.parse(userStored) : null;

export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunk) => {
        try {
            const data = await login(email, password);

            if(data.error)
                return thunk.rejectWithValue(data.error);

            return data;
        } catch(er)
        {
            return thunk.rejectWithValue(er.response?.data || er.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: parsedUser,
        status: 'idles',
        error: null
    },
    reducers:{
        logout: (state)=> {
            state.user = null;
            localStorage.removeItem(userStoredKey)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAsync.pending, (state) =>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.error = null;

            if (action.payload) {
                const { jwt, user: { username, email, id, documentId } } = action.payload;
                state.user = { jwt, username, email, id, documentId };

                if(state.user)
                    localStorage.setItem(userStoredKey, JSON.stringify(state.user))
            } else {
                state.user = null;
                state.error = 'Erro ao tentar obter os dados do usuário'
                localStorage.removeItem(userStoredKey);
            }
        })
        .addCase(loginAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload
        })
    }
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;