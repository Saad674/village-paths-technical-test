import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  organization: {},
  loading: true,
};

const organizationSlice =  createSlice({
  name: 'organization',
  initialState: initialState,
  reducers: {
    getOrganization(state) {
      state.loading = true;
    },
    setOrganization(state,action) {
      state.loading = false;
      state.organization = action.payload;
    },
  },
});

export const organizationActions = organizationSlice.actions;

export default organizationSlice.reducer;