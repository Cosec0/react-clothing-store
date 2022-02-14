import { createSelector } from 'reselect';

const selectUser = state => state.users;

export const selectCurrentUser = createSelector(
    [selectUser],
    (users) => users.currentUser
); 