import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = ({ columnId }) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId }));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            <TextInput 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter card title"
            />
            <Button>Add card</Button> {}
        </form>
    );
};

export default CardForm;
