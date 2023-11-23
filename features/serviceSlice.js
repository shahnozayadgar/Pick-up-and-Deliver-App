import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: {
    id: null, 
    imgUrl: null, 
    title: null, 
    rating: null,
    short_description: null,
    long_description: null,
    services: null, 
  }
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action) => {
        state.service = action.payload
    }
  }
});

export const { setService } = serviceSlice.actions;
export const selectService = (state) => state.service.service;
export default serviceSlice.reducer;