import { useSelector } from 'react-redux';
import { selectError, selectFavoriteNotices, selectIsLoading, selectNotices, selectOwnNotices } from 'redux/notices/selectors';

export const useAuth = () => {
  return {
    isLoading: useSelector(selectIsLoading),
    isError: useSelector(selectError),
    notices: useSelector(selectNotices),
    ownNotices: useSelector(selectOwnNotices),
    favoriteNotices: useSelector(selectFavoriteNotices),
  };
};