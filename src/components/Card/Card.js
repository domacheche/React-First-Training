import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardRedux';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const handleFavoriteClick = () => {
        dispatch(toggleCardFavorite(id));
    };

    const handleRemoveClick = () => {
        dispatch(removeCard(id));
    };

    return (
        <li className={styles.card}>
            {title}
            <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
                <i className={`fa ${isFavorite ? 'fa-star' : 'fa-star-o'}`} aria-hidden="true"></i>
            </button>
            <button onClick={handleRemoveClick} className={styles.removeButton}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </li>
    );
};

export default Card;
