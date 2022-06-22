import { createAsyncThunk } from '@reduxjs/toolkit';

// services
import businessService from '../../services/businessService';

// actionTypes
import { GET_BUSINESSES } from './business.actionTypes';

export const getBusinesses = createAsyncThunk(GET_BUSINESSES, async () => {
  return await businessService.getBusinesses();
});
