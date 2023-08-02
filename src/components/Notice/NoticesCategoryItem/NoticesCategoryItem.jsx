import { useState } from 'react';

import moment from 'moment';
// import Notify from 'notiflix';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GoClock } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useAuth } from '../../../hooks';
import { HeartIcon } from '../../../icons/HeartIcon';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import ModalWindow from '../../shared/AttentionModal';
import { ModalDeleteWindow } from '../../shared/ModalDeleteWindow';

import cat from '../../../images/cuteCat.jpg';

import css from './NoticesCategoryItem.module.css';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from 'services/noticesAPI';

export const NoticeCategoryItem = ({
  _id,
  name,
  title,
  birthday,
  type,
  comments,
  sex,
  action,
  price,
  location,
  petAvatar,
  owner,
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [modalAcessWindow, setmodalAcessWindow] = useState(false);
  const [modalDeleteWindow, setModalDeleteCloseClick] = useState(false);
  const { isLoggedIn, user } = useAuth();

  const handleDeletePet = _id => {
    // dispatch(fetchDeleteNotice(_id));
    // Notify.Notiflix.Success('This item was succesfully deleted!');
    setModalDeleteCloseClick(false);
  };

  // Функція для видалення або додавання картинки до улюбленої
  const handleFavoritePet = () => {
    if (!isLoggedIn) {
      setmodalAcessWindow(true);
      return;
    }

    
  };

  // Функція для нормалізації локації
  const normalizedLocation = loc => {
    return loc.slice(0, 4) + `...`;
  };

  // Функція для обрахунку віку
  const ageCount = birthData => {
    const birthDate = moment(birthData, 'DD-MM-YYYY');
    const currentDate = moment();

    const yearsDiff = currentDate.diff(birthDate, 'years');
    const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
    const totalMonths = yearsDiff * 12 + monthsDiff;

    if (totalMonths < 12) {
      return `${totalMonths} mon...`;
    }

    if (totalMonths >= 12 && totalMonths < 24) {
      return `1 year`;
    }

    return `${yearsDiff} years`;
  };

  const age = ageCount(birthday);

  return (
    <li className={css.petItem} key={_id}>
      <div className={css.wrapper}>
        <div className={css.petImageWrapper}>
          {petAvatar !== 'String' ? (
            <img alt={'pet'} src={petAvatar} className={css.petImage} />
          ) : (
            <img alt={'pet'} src={cat} className={css.petImage} />
          )}
        </div>
        <p className={css.noticeCategory}>{action}</p>
        {true ? (
          <button
            className={css.addToFavoriteButton}
            onClick={handleFavoritePet}
          >
            <HeartIcon className={css.addToFavoriteButtonIcon} />
          </button>
        ) : (
          <button className={css.removeFromFavoriteButton}>
            <HeartIcon
              className={css.removeFromFavoriteButtonIcon}
              onClick={handleFavoritePet}
            />
          </button>
        )}
        {user._id === owner.userId && (
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => setModalDeleteCloseClick(true)}
          >
            <RiDeleteBinLine className={css.deleteButtonIcon} />
          </button>
        )}
        <div className={css.shortPetInfoWrapper}>
          <ul className={css.shortPetInfoWrapperList}>
            <li className={css.shortPetInfo}>
              <CiLocationOn className={css.shortPetInfoIcon} />
              {normalizedLocation(location)}
            </li>
            <li className={css.shortPetInfo}>
              <GoClock className={css.shortPetInfoIcon} />
              {age}
            </li>
            <li className={css.shortPetInfo}>
              {sex === 'female' ? (
                <BsGenderFemale className={css.shortPetInfoIcon} />
              ) : (
                <BsGenderMale className={css.shortPetInfoIcon} />
              )}
              {sex}
            </li>
          </ul>
        </div>
      </div>
      <div className={css.petInfoWrapper}>
        <p className={css.petImageDescription}>{title}</p>
        <p
          className={css.allPetInfoModalOpen}
          onClick={() => setShowInfoModal(true)}
        >
          Learn more
        </p>
      </div>
      {showInfoModal && (
        <ModalNotice
          onModalCloseClick={() => setShowInfoModal(false)}
          _id={_id}
          name={name}
          title={title}
          birthday={birthday}
          type={type}
          comments={comments}
          sex={sex}
          action={action}
          price={price}
          location={location}
          petAvatar={petAvatar}
          owner={owner}
        />
      )}
      {modalAcessWindow && (
        <ModalWindow onClose={() => setmodalAcessWindow(false)} />
      )}
      {modalDeleteWindow && (
        <ModalDeleteWindow
          onModalDeleteCloseClick={() => setModalDeleteCloseClick(false)}
          handleDeletePet={handleDeletePet}
          name={name}
        />
      )}
    </li>
  );
};
