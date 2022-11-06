import { configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "../redux/features/robotsSlice/robotsSlice";

const mockStore = configureStore({
  reducer: {
    robots: robotsReducer,
  },
  preloadedState: {
    robots: {
      list: [],
    },
  },
});

export default mockStore;
