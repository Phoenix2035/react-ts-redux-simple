import { Types } from "./package.types";

export interface SearchRepositoriesAction {
  type: Types.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: Types.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: Types.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
