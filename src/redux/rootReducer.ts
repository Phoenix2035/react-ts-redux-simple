import { combineReducers } from "redux";
import repositoriesReducer from "./NpmPackage/package.reducer";

const rootReducers = combineReducers({
  repositories: repositoriesReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
