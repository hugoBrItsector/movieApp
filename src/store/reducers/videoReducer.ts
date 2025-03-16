/**Reducer VideoList */

import { Actions, VideoState } from "../types";
import { AnyAction } from "redux";

/**set initial state */

export const videoInitialState: VideoState[] = [
  {
    id: 0,
    name: "Rei Leão",
    link: "https://imagens.publicocdn.com/imagens.aspx/401018?tp=KM",
    viewed: true,
  },
];

export const videoListReducer = (
  state = videoInitialState,
  action: AnyAction
): VideoState[] => {
  switch (action.type) {
    case Actions.ADD_MOVIE: {
      return [...state, action.payload];
    }
    case Actions.DELETE_MOVIE: {
      return state.filter((movie) => movie.id !== action.payload.movieId);
    }
    default:
      return state;
  }
};
