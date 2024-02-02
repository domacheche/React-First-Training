import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../redux/cardRedux'; // Upewnij się, że ścieżka do importu jest poprawna

const Column = ({ id, title, icon }) => {
    const cards = useSelector(state => getFilteredCards(state, id, ''));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={`${styles.icon} fa fa-${icon}`} />
                {title}
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => (
                    // Upewnij się, że wszystkie wymagane propsy są przekazywane do komponentu Card
                    <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
                ))}
            </ul>
            <CardForm columnId={id} />
        </article>
    );
};

export default Column;
