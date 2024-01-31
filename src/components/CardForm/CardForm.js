import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = ({ columnId }) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        
        dispatch({
            type: 'ADD_CARD',
            payload: { title, columnId }
        });
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
