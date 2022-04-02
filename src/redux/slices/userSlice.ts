import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

interface IInitialState {
  user: IUser;
  isLoading: boolean;
  isLogin: boolean;
  isError: string;
}

interface IUser {
  user: {
    id: number| null;
    username: 'string' | null;
    avatar: 'string'| null;
  };
  expiresIn: 'string'| null;
  access_token: 'string'| null;
}

const initialState = {
  isLoading: true,
  isLogin: false,
  isError: '',
  user: {
    user: {
      id: null,
      username: null,
      avatar: null,
    },
    expiresIn: null,
    access_token: null,
  },
} as IInitialState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogin=true;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    logOut: (state) => {
      state.user = initialState.user;
      state.isLogin = false;
    },
  },
});

export const { setUser, setLoading, setError,logOut } = userSlice.actions;

const API = `https://join-tsh-api-staging.herokuapp.com/users`;

export const setUserAction =
  (username: string="", password: string="") => async (dispatch: Dispatch) => {
    dispatch(setError(''));
    const userToken=localStorage.getItem('user-token');
    if(userToken){
      try {
        dispatch(setLoading(true));
        const response = await axios.get(`${API}/me`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        if (response.status === 200) {
          const user = {
            user: response.data
          }
          dispatch(setUser(user));
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
        }
      } catch (error) {
        dispatch(setLoading(false));
      }
      return;
    }

    if(username==="" || password==="") {
      dispatch(setLoading(false));
      return;
    }

    try {
      dispatch(setLoading(true));
      const response = await axios.post(`${API}/login`, {
        username,
        password,
      });
      if (response.status === 201) {
        dispatch(setUser(response.data));
        localStorage.setItem('user-token', response.data.access_token);
        dispatch(setLoading(false));
      } else {
        dispatch(setError("Wrong username or password!"));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setError("Wrong username or password!"));
      console.log(error);
      dispatch(setLoading(false));
    }
  };

export const logOutAction = () => async (dispatch: Dispatch) => {
  localStorage.removeItem('user-token');
  dispatch(logOut());
};
