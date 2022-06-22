import { createReducer } from '@reduxjs/toolkit';

// actions
import { getBusinesses } from './business.actions';

// types
import IBusiness from '../../types/business';

interface IBusinessInitialState {
  list: IBusiness[];
  loading: boolean;
  error: boolean;
}

const initialState: IBusinessInitialState = {
  list: [],
  loading: false,
  error: false,
};

const businessReducer = createReducer(initialState, (builder) => {
  builder.addCase(getBusinesses.fulfilled, (state, action) => {
    state.list = action.payload;
    state.loading = false;
    state.error = false;
  });
  builder.addCase(getBusinesses.pending, (state) => {
    state.loading = true;
    state.error = false;
  });
  builder.addCase(getBusinesses.rejected, (state) => {
    state.loading = false;
    state.error = true;
  });
  builder.addDefaultCase((state) => state);
});

export default businessReducer
