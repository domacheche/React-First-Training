import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);

    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            {favoriteCards.length > 0 ? (
                <ul>
                    {favoriteCards.map(card => (
                        <Card key={card.id} {...card} />
                    ))}
                </ul>
            ) : (
                <p>No favorite cards...</p>
            )}
        </div>
    );
};

export default Favorite;
