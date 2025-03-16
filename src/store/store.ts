import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { VideoState } from "./types";
import { videoInitialState, videoListReducer } from "./reducers/videoReducer";

/**Store type */
export interface StoreState {
  videos: VideoState[];
}

const appReducers = combineReducers({
  videos: videoListReducer, 
});

export const store = createStore(appReducers, composeWithDevTools());
