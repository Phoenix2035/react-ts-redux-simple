import { Action } from "./package.interface";
import { Types } from "./package.types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case Types.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case Types.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case Types.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repositoriesReducer;
