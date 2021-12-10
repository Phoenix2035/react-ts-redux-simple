import {
  SearchRepositoriesAction,
  SearchRepositoriesSuccessAction,
  SearchRepositoriesErrorAction,
} from "./SearchRepositories";

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
