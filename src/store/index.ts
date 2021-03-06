import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productSlice } from '../redux/slices/productSlice';
import { searchSlice } from '../redux/slices/searchSlice';
import { userSlice } from '../redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    search: searchSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
