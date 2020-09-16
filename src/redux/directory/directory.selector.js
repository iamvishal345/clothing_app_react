import { createSelector } from "reselect";

const selectDir = (state) => state.directory;

export const selectDirectory = createSelector(
  [selectDir],
  (directory) => directory.sections
);
