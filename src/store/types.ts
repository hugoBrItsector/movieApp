/**Actions types */

export enum Actions {
  ADD_MOVIE = "ADD_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
  DELETE_MOVIE = "DELETE_MOVIE",
  TOGGLE_VIEWED_MOVIE = "TOGGLE_VIEWED_MOVIE",
}

/**Video State */
export interface VideoState {
  id: number;
  name: string;
  link: string;
  viewed: boolean;
}
