import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';


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
