import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./package.interface";
import { Types } from "./package.types";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: Types.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((item: any) => {
        return item.package.name;
      });

      dispatch({
        type: Types.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: Types.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
