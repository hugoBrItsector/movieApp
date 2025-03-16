import { action } from "typesafe-actions";

/**Actions for VideoList*/

import { Actions, VideoState } from "../types";

/**define add film */

export const addMovie = (newMovie: VideoState) =>
  action(Actions.ADD_MOVIE, newMovie);

export const deleteMovie = (movieId: number) =>
  action(Actions.DELETE_MOVIE, { movieId });
