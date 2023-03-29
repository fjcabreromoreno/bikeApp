import { createSlice } from '@reduxjs/toolkit';
import { bikes } from '../data/bikes';

const initialState = {
  bikes,
};

const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    selectBike: (state, action) => {
      return {
        ...state,
        bikes: state.bikes.map((bike, index) =>
          index === action.payload
            ? { ...bike, isSelected: !bike.isSelected }
            : { ...bike, isSelected: false }
        ),
      };
    },
    updateBookedBikeInfo: (state, action) => {
      return {
        ...state,
        bikes: state.bikes.map((bike) =>
          bike.isSelected ? { ...bike, bookInfo: action.payload } : bike
        ),
      };
    },
  },
});

export const { selectBike, updateBookedBikeInfo } = bikesSlice.actions;

export default bikesSlice.reducer;
