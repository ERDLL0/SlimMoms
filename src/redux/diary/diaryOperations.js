import axios from '../auth/axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showLoader, hideLoader } from '../loader/loaderSlice';

export const addProductOperation = createAsyncThunk(
  'diary/addProduct',
  async (productData, thunkAPI) => {
    thunkAPI.dispatch(showLoader());
    try {
      const { data } = await axios.post('/diary/day', productData);
      thunkAPI.dispatch(hideLoader());
      return data;
    } catch (e) {
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProductOperation = createAsyncThunk(
  'diary/deleteProduct',
  async ({ date, productId }, thunkAPI) => {
    thunkAPI.dispatch(showLoader());
    try {
      // Backend expects date in req.body for delete
      const { data } = await axios.delete(`/diary/day/${productId}`, { 
        data: { date } 
      });
      thunkAPI.dispatch(hideLoader());
      return data;
    } catch (e) {
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getDayInfoOperation = createAsyncThunk(
  'diary/getDayInfo',
  async (date, thunkAPI) => {
    thunkAPI.dispatch(showLoader());
    try {
      const { data } = await axios.post('/diary/day/info', { date });
      thunkAPI.dispatch(hideLoader());
      return data;
    } catch (e) {
      thunkAPI.dispatch(hideLoader());
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
