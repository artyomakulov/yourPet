import { useEffect, useState } from 'react';
import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';
import { useAuth } from 'hooks';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from 'services/noticesAPI';

export const NoticesCategoriesList = ({ cards }) => {

  

  return (
    <ul className={css.cardList}>
      {cards.map(card => (
        <NoticeCategoryItem
          {...card}
          key={card._id}
        />
      ))}
    </ul>
  );
};
