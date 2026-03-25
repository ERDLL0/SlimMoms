import axios from 'axios';
import { store } from '../store';
import { setCredentials, logOut } from './authSlice';

const instance = axios.create({ baseURL: 'http://localhost:5001/api' });

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refreshToken, sessionId } = store.getState().auth || {};
      
      if (!refreshToken || !sessionId) {
        store.dispatch(logOut());
        return Promise.reject(error);
      }

      try {
        const res = await axios.post('http://localhost:5001/api/users/refresh', { refreshToken, sessionId });
        const { accessToken, refreshToken: newRefresh, sessionId: newSessionId } = res.data;

        store.dispatch(setCredentials({ token: accessToken, refreshToken: newRefresh, sessionId: newSessionId }));
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        store.dispatch(logOut());
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
