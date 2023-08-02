export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

export const selectNotices = state => state.notices.items;

export const selectOwnNotices = state => state.notices.own;

export const selectFavoriteNotices = state => state.notices.favorite;
