import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

import type { AppThunk, RootState } from "../store";
import { IUser } from "@/interfaces/IUser";
import axios, { AxiosError } from "axios";
import AuthService from "@/services/AuthService";
import { AuthResponse } from "@/models/response/AuthResponse";

export const login = createAsyncThunk("user/login", async ({email, password}: {email:string, password: string}, {rejectWithValue}) => {
  try {
    const response = await AuthService.login(email, password)
    localStorage.setItem('token', response.data.accessToken)
    localStorage.setItem('token/refresh', response.data.refreshToken)
    const user = await AuthService.getUser()

    return user.data

  } catch (error:any) {
    if (error) {
      return rejectWithValue(error.response.data)
    }
  }
});

export const registration = createAsyncThunk("user/registration", async ({email, password, username} : {email: string, password: string, username: string}, {rejectWithValue}) => {
try {
  const response = await AuthService.reg(email, password, username)
  localStorage.setItem('token', response.data.accessToken)
  localStorage.setItem('token/refresh', response.data.refreshToken)
  const user = await AuthService.getUser()

  return user.data

} catch (error:any) {
  return rejectWithValue(error.response.data)
}
})

export const checkAuth = createAsyncThunk("user/checkAuth", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/refresh', {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token/refresh')}`,
        "Content-Type": "application/x-www- form-urlencoded; charset=utf-8"
      }
    })

    const user = await AuthService.getUser()

    localStorage.setItem('token', response.data.accessToken)
    localStorage.setItem('token/refresh', response.data.refreshToken)

    return user.data
  } catch (error:any) {
    console.log('error')
    return rejectWithValue(error.response.data.message)
  }
})

export const logout = createAsyncThunk('user/logout', async (_, {rejectWithValue}) => {
  try {
    await AuthService.logout()
    localStorage.removeItem('token')
    localStorage.removeItem('token/refresh')
  } catch (error: any) {
      return rejectWithValue(error.response.data.message)
  }
})


interface userState {
  user: IUser | null
  isAuth: boolean
  error: any | null 
}

const initialState: userState = {
  user: null,
  isAuth: false,
  error: null
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null 
    }
  },
  extraReducers: (builder) => {
    builder
    // login
    .addCase(login.pending, (state) => {
      state.isAuth = false
      state.user = null
    })
    .addCase(login.fulfilled, (state, action: any) => {
      state.isAuth = true
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action: any) => {
      state.isAuth = false
      state.user = null
      state.error = action.payload
    })

    // registration
    .addCase(registration.pending, (state) => {
      state.isAuth = false
      state.user = null
    })
    .addCase(registration.fulfilled, (state, action: any) => {
      state.isAuth = true
      state.user = action.payload
    })
    .addCase(registration.rejected, (state, action: any) => {
      state.isAuth = false
      state.user = null
      state.error = action.payload
    })

    // checkAuth
    .addCase(checkAuth.pending, (state) => {
      state.isAuth = false
      state.user = null
    })
    .addCase(checkAuth.fulfilled, (state, action: any) => {
      state.isAuth = true
      state.user = action.payload
    })
    .addCase(checkAuth.rejected, (state) => {
      state.isAuth = false
      state.user = null
    })

    // logout
    .addCase(logout.pending, (state) => {
      state.isAuth = false
      state.user = null
    })
    .addCase(logout.fulfilled, (state, action: any) => {
      state.isAuth = false
      state.user = null
    })
    .addCase(logout.rejected, (state) => {
      state.isAuth = false
      state.user = null
    })
  }
})

export const { clearError } = authSlice.actions;



export const authReducer =  authSlice.reducer;
